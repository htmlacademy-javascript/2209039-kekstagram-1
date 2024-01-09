
import { isEscapeKey } from './util.js';


const closeWindow = (section) => section.classList.add('hidden');

const onModalKeydown = (evt, section) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeWindow(section);
    document.removeEventListener('keydown', onModalKeydown);
  }
};

const onButtonClose = (section, closeButton) => {
  closeWindow(section);
  closeButton.removeEventListener('click', onButtonClose);
};

const showErrorWindow = () => {
  const errorTemplate = document.querySelector('#error').content;

  document.body.append(errorTemplate);
  const errorSection = document.querySelector('.error');
  const closeButton = document.querySelector('.error__button');
  onButtonClose(errorSection, closeButton);
  closeButton.addEventListener('click', onButtonClose);
  document.addEventListener('keydown', onModalKeydown);
};

const showSuccessWindow = () => {
  const successTemplate = document.querySelector('#success').content;

  document.body.append(successTemplate);

  const successSection = document.querySelector('.success');
  const closeButton = document.querySelector('.success__button');
  closeButton.addEventListener('click', onButtonClose(successSection, closeButton));
  document.addEventListener('keydown', onModalKeydown(closeButton));
};

export { showSuccessWindow, showErrorWindow };
