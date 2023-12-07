import { getPostsArray } from './data.js';


const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const differentThumbnails = getPostsArray();

const differentThumbnailsFragment = document.createDocumentFragment();

differentThumbnails.forEach(({url, likes, comments, description}) => {
  const thumbNailElement = pictureTemplate.cloneNode(true);
  thumbNailElement.querySelector('.picture__img').src = url;
  thumbNailElement.querySelector('.picture__comments').textContent = comments.length;
  thumbNailElement.querySelector('.picture__img').alt = description;
  thumbNailElement.querySelector('.picture__likes').textContent = likes;
  differentThumbnailsFragment.appendChild(thumbNailElement);
});

pictureContainer.appendChild(differentThumbnailsFragment);

const thumbnailPictures = document.querySelectorAll('.picture');

export { thumbnailPictures };
