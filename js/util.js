const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getId = () => {
  let counter = 0;

  function countIncreaser () {
    counter++;
    return counter;
  }
  return countIncreaser;
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

export { getRandomInteger, getId, isEscapeKey, isEnterKey };
