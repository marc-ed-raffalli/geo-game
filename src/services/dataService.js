/*
 * Abstraction of the data layer.
 * Made async to reduce refactoring when server side service is introduced
 */

export const read = key => {
  const value = localStorage.getItem(key);

  try {
    return Promise.resolve(value !== null ? JSON.parse(value) : undefined);
  }
  catch (e) {
    console.error('Could not read key:', key, e);
    return Promise.reject(e);
  }
};

export const write = (key, value) => {
  try {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
    return Promise.resolve();
  }
  catch (e) {
    return Promise.reject(e);
  }
};
