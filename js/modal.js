import { isEscapeKey } from './util.js';

const COMMENTS_COUNT = 5;

const renderModal = (data) => {
  const thumbnailPictures = document.querySelectorAll('.picture');

  const bigPicture = document.querySelector('.big-picture');
  const closeModalButton = bigPicture.querySelector('.big-picture__cancel');
  const commentTemplate = document.querySelector('#comment').content;
  const commentsList = document.querySelector('.social__comments');
  const moreCommentsButton = bigPicture.querySelector('.comments-loader');
  let commentsShown = 0;
  let onMoreCommentsClick;

  const closeModalWindow = () => {
    bigPicture.classList.add('hidden');
    document.removeEventListener('keydown', onModalKeydown);
    commentsShown = 0;
    moreCommentsButton.removeEventListener('click', renderComments);
    moreCommentsButton.removeEventListener('click', onMoreCommentsClick);
  };


  function onModalKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModalWindow();
    }
  }

  const openModalWindow = () => {
    document.querySelector('body').classList.add('.modal-open');
    bigPicture.classList.remove('hidden');
    document.addEventListener('keydown', onModalKeydown);
  };

  const onCloseModalClick = () => {
    closeModalWindow();
  };

  const renderModalContent = (postData) => {
    bigPicture.querySelector('img').src = postData.url;
    bigPicture.querySelector('.likes-count').textContent = postData.likes;
    bigPicture.querySelector('.social__caption').textContent = postData.description;

    const commentsHTML = document.querySelectorAll('.social__comment');
    commentsHTML.forEach((commentHTML) => commentHTML.parentNode.removeChild(commentHTML));
  };

  function renderComments (postData) {
    const commentsCounter = document.querySelector('.social__comment-count');
    commentsList.innerHTML = '';
    commentsShown += COMMENTS_COUNT;

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
      } else {
        moreCommentsButton.classList.remove('hidden');
      }
    }
  }

  for (let i = 0; i < thumbnailPictures.length; i++) {
    const currentPicture = thumbnailPictures[i];
    currentPicture.addEventListener('click', () => {
      const postId = Number(currentPicture.getAttribute('data-postId'));
      const currentPostData = data.find((postData) => postData.id === postId);
      renderModalContent(currentPostData);
      renderComments(currentPostData);
      openModalWindow();

      onMoreCommentsClick = () => {
        renderComments(currentPostData);
      };
      moreCommentsButton.addEventListener('click', onMoreCommentsClick);
    });
  }

  closeModalButton.addEventListener('click', onCloseModalClick);
};

export {renderModal};
