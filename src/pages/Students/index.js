import React from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle, FaEdit, FaWindowClose, FaExclamation,
} from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { StudentContainer, ProfilePicture, NewStudent } from './styled';

import axios from '../../services/axios';
import Loading from '../../components/Loading';

export default function Students() {
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setStudents(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();

    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const newStudents = [...students];
      newStudents.splice(index, 1);
      setStudents(newStudents);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Necessário estar logado.');
      } else {
        toast.error('Ocorreu um erro ao excluir o aluno.');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NewStudent to="/aluno/">Novo aluno</NewStudent>

      <StudentContainer>
        {students.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', '') ? (
                <img crossOrigin="" src={aluno.Photos[0].url} alt="foto do aluno" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}><FaEdit size={16} /></Link>
            <Link to={`/aluno/${aluno.id}/edit`} onClick={handleDeleteAsk}><FaWindowClose size={16} /></Link>
            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
