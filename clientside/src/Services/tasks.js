import { fetchUrl } from "../Utils/fetchAPI";
import { getLocalStorageItem } from "../Utils/localStorage";
import { REACT_APP_CREATE_TASK, REACT_APP_DELETE_USER_TASK, REACT_APP_GET_USER_TASKS } from "../vars.json";

export const getUserTasks = async () => {
  const username = getLocalStorageItem('username');
  const url = REACT_APP_GET_USER_TASKS;
  const body = { username };
  const headers = new Headers();
  headers.append('content-type', 'application/json');

  const requestOptions = { method: 'POST', headers, body: JSON.stringify(body), redirect: 'follow'};
  return await fetchUrl(url, requestOptions);
};

export const deleteUserTask = async (id) => {
  const username = getLocalStorageItem('username');
  const url = REACT_APP_DELETE_USER_TASK;
  const body = { username, id };
  const headers = new Headers();
  headers.append('content-type', 'application/json');

  const requestOptions = { method: 'POST', headers, body: JSON.stringify(body), redirect: 'follow'};
  return await fetchUrl(url, requestOptions);
};

export const createUserTask = async (task) => {
  const userName = getLocalStorageItem('username');
  const url = REACT_APP_CREATE_TASK;
  const body = {
    userName,
    task
  };
  const headers = new Headers();
  headers.append('content-type', 'application/json');

  const requestOptions = { method: 'POST', headers, body: JSON.stringify(body), redirect: 'follow'};
  return await fetchUrl(url, requestOptions);
};