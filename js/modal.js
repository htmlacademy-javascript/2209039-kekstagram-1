import { isEscapeKey, isEnterKey } from './util.js';
import { thumbnailPictures } from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalWindow();
  }
};

const openModalWindow = () => {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', () => {
    onModalKeydown();
  });
};

const closeModalWindow = () => {
  bigPicture.classList.add('hidden');

  document.removeEventListener('keydown', () => {
    onModalKeydown();
  });
};

for (let i = 0; i < thumbnailPictures.length; i++) {
  thumbnailPictures[i].addEventListener('click', () => {
    const currentPicture = thumbnailPictures[i];
    bigPicture.querySelector('.big-picture__img').src = currentPicture.querySelector('.picture__img').src;
    openModalWindow();
  });
}

