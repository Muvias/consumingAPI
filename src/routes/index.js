import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Page404 from '../pages/404';

export default function Routers() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Students} isClosed={false} />
      <MyRoute path="/registro" component={Register} isClosed={false} />
      <MyRoute path="/login" component={Login} isClosed={false} />
      <MyRoute exact path="/aluno" component={Student} isClosed />
      <MyRoute path="/aluno/:id/edit" component={Student} isClosed />
      <MyRoute path="/images/:id" component={Photos} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
