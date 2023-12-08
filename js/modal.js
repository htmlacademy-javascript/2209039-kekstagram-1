import { isEscapeKey } from './util.js';
import { thumbnailPictures } from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const closeModalButton = bigPicture.querySelector('.big-picture__cancel');

const onModalKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};

const openModalWindow = () => {
  document.querySelector('body').classList.add('.modal-open');
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onModalKeydown);
};

const closeModalWindow = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onModalKeydown);
};

for (let i = 0; i < thumbnailPictures.length; i++) {
  const currentPicture = thumbnailPictures[i];
  currentPicture.addEventListener('click', () => {
    bigPicture.querySelector('img').src = currentPicture.querySelector('.picture__img').src;
    bigPicture.querySelector('.comments-count').textContent = currentPicture.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.likes-count').textContent = currentPicture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.social__caption').textContent = currentPicture.querySelector('.picture__img').alt;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    openModalWindow();
  });
}

closeModalButton.addEventListener('click', closeModalWindow);
