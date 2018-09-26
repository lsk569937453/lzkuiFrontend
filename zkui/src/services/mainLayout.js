import request from '../utils/request';
// import { PAGE_SIZE } from '../constants';

export function fetchPath({ path }) {

  const parm={path:path};
  return request(`/zk/getChildren`,{
    method:'POST',
    body:JSON.stringify(parm),
    headers: {
      　　　　 'Accept': 'application/json',
      　　　　 'Content-Type': 'application/json',
    　　　　 },
  });
}

export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
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