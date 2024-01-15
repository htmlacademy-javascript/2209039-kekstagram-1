const PHOTO_EFFECTS = [
  {
    name: 'none',
    style:'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const effectsLevel = document.querySelector('.effect-level__value');
const noEffect = PHOTO_EFFECTS[0];
let currentEffect = noEffect;

const removeEffects = () => currentEffect === noEffect;

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

noUiSlider.create(sliderElement, {
  range: {
    min: noEffect.min,
    max: noEffect.max,
  },
  start: noEffect.max,
  step: noEffect.step,
  connect: 'lower',
});

hideSlider();

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions ({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });


  if (removeEffects()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return false;
  }
  currentEffect = PHOTO_EFFECTS.find((filter) => filter.name === evt.target.value);
  imagePreview.classList = `effects__preview--${currentEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  imagePreview.style.filter = removeEffects() ?
    noEffect.style :
    `${currentEffect.style}(${sliderValue}${currentEffect.unit})`;
  effectsLevel.value = sliderValue;
};

const resetEffects = () => {
  currentEffect = noEffect;
  updateSlider();
};

effects.addEventListener('change', onEffectsChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
