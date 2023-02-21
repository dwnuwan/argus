import Axios from 'axios';
import API_PATH from '../api';

export const fetchTasks = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_TASKS',
      payload: new Promise((resolve, reject) => {
        Axios.get(`${API_PATH}TaskMaster/GetAll`, {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
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

export const createTask = (newTask) => {
  console.log(newTask);
  return (dispatch) => {
    dispatch({
      type: 'CREATE_TASK',
      payload: new Promise((resolve, reject) => {
        Axios.post(`${API_PATH}TaskMaster/Create`, newTask, {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem("Token") }
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
