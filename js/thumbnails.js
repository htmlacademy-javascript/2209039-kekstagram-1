import { renderModal } from './modal.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

function renderThumbnails (data) {
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
  renderModal(data);
}

export { renderThumbnails };
