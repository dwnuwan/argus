import Axios from 'axios';
import API_PATH from '../api';

export const fetchDocuments = () => {
    return (dispatch) => {
      dispatch({
        type: 'FETCH_DOCUMENTS',
        payload: new Promise((resolve, reject) => {
          Axios.get(`${API_PATH}Document/GetAll`, {
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

  
export const createDocument = (newDoucment) => {
    return (dispatch) => {
      dispatch({
        type: 'CREATE_DOCUMENT',
        payload: new Promise((resolve, reject) => {
        console.log( newDoucment+"TT");
          Axios.post(`${API_PATH}Document/Create/`, newDoucment, {
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