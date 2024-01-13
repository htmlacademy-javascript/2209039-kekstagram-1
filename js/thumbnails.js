import { getRandomInteger } from './util.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const defaultOrderButton = document.querySelector('#filter-default');
const randomOrderButton = document.querySelector('#filter-random');
const popularOrderButton = document.querySelector('#filter-discussed');

const classSwitcher = (target) => {
  const previousButton = document.querySelector('.img-filters__button--active');
  previousButton.classList.remove('img-filters__button--active');

  target.classList.add('img-filters__button--active');
};

const sortRandom = (photos) => {
  classSwitcher(randomOrderButton);
  const photosArray = Array.from(photos);
  return photosArray.sort(() => Math.random - 0.5);
};

const renderThumbnails = (data) => {
  const differentThumbnailsFragment = document.createDocumentFragment();

  data.forEach((postData) => {
    const {url, likes, comments, description, id} = postData;
    const thumbNailElement = pictureTemplate.cloneNode(true);
    thumbNailElement.setAttribute('data-postId', id);
    thumbNailElement.querySelector('.picture__img').src = url;
    thumbNailElement.querySelector('.picture__comments').textContent = comments.length;
    thumbNailElement.querySelector('.picture__img').alt = description;
    thumbNailElement.querySelector('.picture__likes').textContent = likes;
    differentThumbnailsFragment.appendChild(thumbNailElement);
  });

  pictureContainer.appendChild(differentThumbnailsFragment);

  const thumbnailPictures = document.querySelectorAll('.picture');
  randomOrderButton.addEventListener('click', () => sortRandom(thumbnailPictures));

  return thumbnailPictures;
};
export { renderThumbnails };
