import { isEscapeKey } from './util.js';

const renderModal = (thumbnailPictures, data) => {
  const bigPicture = document.querySelector('.big-picture');
  const closeModalButton = bigPicture.querySelector('.big-picture__cancel');
  const commentTemplate = document.querySelector('#comment').content;
  const commentsList = document.querySelector('.social__comments');
  const commentsHTML = document.querySelectorAll('.social__comment');
  let commnetsShown = 5;

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

  const renderModalContent = (postData) => {
    bigPicture.querySelector('img').src = postData.url;
    bigPicture.querySelector('.comments-count').textContent = postData.comments.length;
    bigPicture.querySelector('.likes-count').textContent = postData.likes;
    bigPicture.querySelector('.social__caption').textContent = postData.description;

    commentsHTML.forEach((commentHTML) => commentHTML.parentNode.removeChild(commentHTML));

    postData.comments.forEach((commentData) => {
      const { avatar, message, name } = commentData;
      const commentsSection = commentTemplate.cloneNode(true);
      commentsSection.querySelector('.social__picture').src = avatar;
      commentsSection.querySelector('.social__picture').alt = name;
      commentsSection.querySelector('.social__text').textContent = message;
      commentsList.appendChild(commentsSection);
    });
  }
};

  for (let i = 0; i < thumbnailPictures.length; i++) {
    const currentPicture = thumbnailPictures[i];
    currentPicture.addEventListener('click', () => {
      const postId = Number(currentPicture.getAttribute('data-postId'));
      const currentPostData = data.find((postData) => postData.id === postId);
      renderModalContent(currentPostData);
      openModalWindow();
    });
  }

  closeModalButton.addEventListener('click', closeModalWindow);
};

export {renderModal};
