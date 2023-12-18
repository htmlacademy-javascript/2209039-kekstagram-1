import { isEscapeKey } from './util.js';

const renderModal = (thumbnailPictures, data) => {
  const bigPicture = document.querySelector('.big-picture');
  const closeModalButton = bigPicture.querySelector('.big-picture__cancel');
  const commentTemplate = document.querySelector('#comment').content;
  const commentsList = document.querySelector('.social__comments');
  let commentsShown = 0;

  const onModalKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      commentsShown = 0;
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
    commentsShown = 0;
  };

  const renderModalContent = (postData) => {
    bigPicture.querySelector('img').src = postData.url;
    bigPicture.querySelector('.likes-count').textContent = postData.likes;
    bigPicture.querySelector('.social__caption').textContent = postData.description;

    const commentsHTML = document.querySelectorAll('.social__comment');
    commentsHTML.forEach((commentHTML) => commentHTML.parentNode.removeChild(commentHTML));

    const renderComments = () => {
      const moreCommentsButton = bigPicture.querySelector('.comments-loader');
      const commentsCounter = document.querySelector('.social__comment-count');
      commentsList.innerHTML = '';
      commentsShown += 5;

      if (postData.comments.length < commentsShown) {
        commentsShown = postData.comments.length;
      }

      for (let i = 0; i < commentsShown; i++) {
        const currentComment = postData.comments[i];
        const commentsSection = commentTemplate.cloneNode(true);
        commentsSection.querySelector('.social__picture').src = currentComment.avatar;
        commentsSection.querySelector('.social__picture').alt = currentComment.name;
        commentsSection.querySelector('.social__text').textContent = currentComment.message;
        commentsList.appendChild(commentsSection);
        commentsCounter.textContent = `${commentsList.children.length} из ${postData.comments.length} комментариев`;

        if (commentsList.children.length === postData.comments.length) {
          moreCommentsButton.classList.add('hidden');
          moreCommentsButton.removeEventListener('click', renderComments);
        } else {
          moreCommentsButton.classList.remove('hidden');
          moreCommentsButton.addEventListener('click', renderComments);
        }
      }
    };

    renderComments();
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
