import request from '../utils/request';
// import { PAGE_SIZE } from '../constants';

export function fetchPath({path}) {

  const parm = {path: path};
  return request(`/zk/getChildren`, {
    method: 'POST',
    body: JSON.stringify(parm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export function fetchPathData({path}) {

  const parm = {path: path};
  return request(`/zk/getPathData`, {
    method: 'POST',
    body: JSON.stringify(parm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
export function savePathProperty({nodeProperty,path}) {

  const parm = {path: path,nodeProperty:nodeProperty};
  return request(`/zk/savePathproperty`, {
    method: 'POST',
    body: JSON.stringify(parm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
export function deleteNode({path}) {

  const parm = {path: path};
  return request(`/zk/deleteNode`, {
    method: 'POST',
    body: JSON.stringify(parm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}
export function addNode({path,nodeValue}) {

  const parm = {path: path,nodeValue:nodeValue};
  return request(`/zk/addNode`, {
    method: 'POST',
    body: JSON.stringify(parm),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
