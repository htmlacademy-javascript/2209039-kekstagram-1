
import { isEscapeKey } from './util.js';

let modalWindow;

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow();
  }
};

function closeWindow () {
  // обработчик onModalKeydown вешается на документ и не знает про section и closeButton
  modalWindow.classList.add('hidden');
  // closeButton.removeEventListener('click', closeWindow);
  document.removeEventListener('keydown', onModalKeydown);
}

const showErrorWindow = () => {
  const errorTemplate = document.querySelector('#error').content;

  document.body.append(errorTemplate);
  modalWindow = document.querySelector('.error');
  // const closeButton = document.querySelector('.error__button');
  document.addEventListener('keydown', onModalKeydown);
};

const showSuccessWindow = () => {
  const successTemplate = document.querySelector('#success').content;

  document.body.append(successTemplate);

  modalWindow = document.querySelector('.success');
  // closeButton.addEventListener('click', closeWindow);
  document.addEventListener('keydown', onModalKeydown);
};

export { showSuccessWindow, showErrorWindow };
