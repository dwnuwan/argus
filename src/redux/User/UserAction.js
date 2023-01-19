import { TypeSpecimen } from '@mui/icons-material';
import Axios from 'axios';
import API_PATH from '../api';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_USERS',
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}User/GetAll`, {
          //headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
        })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            resolve([]);
          });
      }),
    });
  };
};

export const createUser = (newUser) => {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_USER',
      payload: new Promise((resolve, reject) => {
        Axios.post(`${API_PATH}/User/`, newUser, {
          //  headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
        })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            resolve([]);
          });
      }),
    });
  };
};

export const deleteUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: 'DELETE_USER',
      payload: new Promise((resolve, reject) => {
        Axios.delete(`${API_PATH}User/Delete`, user, {
          //  headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
        })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            resolve([]);
          });
      }),
    });
  };
};
