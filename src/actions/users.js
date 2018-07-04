import { userLoggedIn } from './auth';
import api from '../components/api';

export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.datarankJWT = user.token;
    dispatch(userLoggedIn(user));
  });
