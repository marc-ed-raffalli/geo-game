import {read, write} from './dataService';

export const fetchData = id => {
  return read(`profile:${id}`)
    .catch(err => console.error('Failed to load profile', id, err));
};

export const saveData = (id, data) => {
  return write(`profile:${id}`, data)
    .catch(err => console.error('Failed to save profile', id, err));
};
