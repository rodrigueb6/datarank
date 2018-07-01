import { userLoggedIn } from './auth';
import api from '../components/api';

export const signup = data => dispatch => api.user.signup(data).then(user => dispatch(userLoggedIn(user)));
