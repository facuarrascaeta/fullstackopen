import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseURL)
  return req.then(res => res.data)
}

const create = (newObject) => {
  const req = axios.post(baseURL, newObject)
  return req.then(res => res.data)
}

const del = (id) => {
  const req = axios.delete(`${baseURL}/${id}`)
  return req.then(res => res.data)
}

const update = (newObject) => {
  const req = axios.put(`${baseURL}/${newObject.id}`, newObject)
  return req.then(res => res.data)
}

export default {getAll, create, del, update}
