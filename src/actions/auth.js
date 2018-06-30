import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../components/types';
import api from '../components/api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.datarankJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem('datarankJWT');
  dispatch(userLoggedOut());
};
