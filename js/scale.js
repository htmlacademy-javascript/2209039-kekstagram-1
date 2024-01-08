const SCALE_STEP = 25;
const MAX_VALUE = 100;

const scaleValue = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const picture = document.querySelector('.img-upload__preview img');

const applyScaleParameters = (size) => {
  scaleValue.value = `${size}%`;
  picture.style = `transform: scale(${0.01 * size})`;
};

const onSmallerButton = () => {
  let currentValue = parseInt(scaleValue.value, 10);
  currentValue -= SCALE_STEP;

  if (currentValue < SCALE_STEP) {
    currentValue = SCALE_STEP;
  }

  applyScaleParameters(currentValue);
};

const onBiggerButton = () => {
  let currentValue = parseInt(scaleValue.value, 10);
  currentValue += SCALE_STEP;

  if (currentValue > MAX_VALUE) {
    currentValue = MAX_VALUE;
  }

  applyScaleParameters(currentValue);
};

const removeScaleListeners = () => {
  scaleSmaller.removeEventListener('click', onSmallerButton);
  scaleBigger.removeEventListener('click', onBiggerButton);
};

const scalePicture = () => {
  scaleValue.value = '100%';
  picture.style = 'transform: scale(1)';

  scaleSmaller.addEventListener('click', onSmallerButton);
  scaleBigger.addEventListener('click', onBiggerButton);
};

export { scalePicture, removeScaleListeners };
