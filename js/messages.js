
import { isEscapeKey } from './util.js';

let modalWindow;

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function closeWindow () {
  modalWindow.remove();
  document.removeEventListener('keydown', onModalKeydown);
}

const showErrorWindow = () => {
  const errorTemplate = document.querySelector('#error').content;

  document.body.append(errorTemplate);
  modalWindow = document.querySelector('.error');
  const closeButton = document.querySelector('.error__button');
  closeButton.addEventListener('click', () => closeWindow());
  document.addEventListener('keydown', onModalKeydown);
};

const showSuccessWindow = () => {
  const successTemplate = document.querySelector('#success').content;

  document.body.append(successTemplate);

  modalWindow = document.querySelector('.success');
  const closeButton = document.querySelector('.success__button');
  closeButton.addEventListener('click', () => closeWindow());
  document.addEventListener('keydown', onModalKeydown);
};

export { showSuccessWindow, showErrorWindow };
