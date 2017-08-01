export const getRandomInt = (max = 100, min = 0) => {
  return min + Math.round(Math.random() * 1000) % (max - min);
};
