import { isEscapeKey } from './util.js';
import { scalePicture, removeScaleListeners } from './scale.js';
import { resetEffects } from './effects.js';

const form = document.querySelector('.img-upload__form');
const fileUploader = document.querySelector('.img-upload__input');
const pictureEditor = document.querySelector('.img-upload__overlay');
const closeModalButton = pictureEditor.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const tagsSymbols = /^#[a-zа-яё0-9]{1,19}$/i;
const hashtagErrorText = 'Ошибка! Неверно заполнены хэштеги :(';
const submitButton = form.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуем...'
};


const pristine = new Pristine (form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-text'
});

const focusedOnTextfield = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentsField;

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt) && !focusedOnTextfield()) {
    evt.preventDefault();
    onCloseModalButton();
  }
};

const onFileUploader = () => {
  document.querySelector('body').classList.add('.modal-open');
  pictureEditor.classList.remove('hidden');
  document.addEventListener('keydown', onModalKeydown);
  pristine.reset();
  commentsField.value = '';
  scalePicture();
};

function onCloseModalButton() {
  resetEffects();
  form.reset();
  pictureEditor.classList.add('hidden');
  document.removeEventListener('keydown', onModalKeydown);
  removeScaleListeners();
}

const validateForm = () => {
  const isValidTag = (tag) => tagsSymbols.test(tag);

  const checkValidCount = (tags) => tags.length <= 5;

  const checkUniqueTags = (tags) => {
    const tagsCollection = tags.map((tag) => tag.toLowerCase());
    return tagsCollection.length === new Set(tagsCollection).size;
  };

  const checkTags = (value) => {
    const tags = value.trim().split(' ');
    return checkValidCount(tags) && checkUniqueTags(tags) && tags.every(isValidTag);
  };

  pristine.addValidator(
    hashtagField,
    checkTags,
    hashtagErrorText
  );

  closeModalButton.addEventListener('click', onCloseModalButton);
  fileUploader.addEventListener('change', onFileUploader);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = (callBack) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      await callBack(new FormData(evt.target));
      unblockSubmitButton();
      onCloseModalButton();
    }
  });
};

export { validateForm, setUserFormSubmit };
