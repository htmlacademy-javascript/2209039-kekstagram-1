const SCALE_STEP = 25;

const scaleValue = document.querySelector('.scale__control--value');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const picture = document.querySelector('.img-upload__preview').querySelector('img');
const pictureWindow = document.querySelector('.img-upload__overlay');

const scalePicture = () => {
  scaleValue.value = '100%';
  picture.style = 'transform: scale(1)';

  const makeSmaller = () => {
    let currentValue = parseInt(scaleValue.value, 10);
    currentValue -= SCALE_STEP;

    if (currentValue < SCALE_STEP) {
      currentValue = SCALE_STEP;
    }

    scaleValue.value = `${currentValue}%`;
    picture.style = `transform: scale(${0.01 * currentValue})`;
  };

  const makeBigger = () => {
    let currentValue = parseInt(scaleValue.value, 10);
    currentValue += SCALE_STEP;

    if (currentValue > 100) {
      currentValue = 100;
    }

    scaleValue.value = `${currentValue}%`;
    picture.style = `transform: scale(${0.01 * currentValue})`;
  };

  scaleSmaller.addEventListener('click', makeSmaller);
  scaleBigger.addEventListener('click', makeBigger);

  if (pictureWindow.classList.contains('hidden')) {
    scaleSmaller.removeEventListener('click', makeSmaller);
    scaleBigger.removeEventListener('click', makeBigger);
  }
};

export { scalePicture };
