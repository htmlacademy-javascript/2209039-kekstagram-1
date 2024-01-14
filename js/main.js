import { renderThumbnails } from './thumbnails.js';
// import { getPostsArray } from './data.js';
import { renderModal } from './modal.js';
import { validateForm, setUserFormSubmit } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessWindow, showErrorWindow } from './messages.js';
import { sortPhotos } from './sort.js';

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    showSuccessWindow();
  } catch {
    showErrorWindow();
  }
});

try {
  const data = await getData();
  sortPhotos(data, renderThumbnails);
  const thumbnailPictures = renderThumbnails(data);
  renderModal(thumbnailPictures, data);
} catch (err) {
  showAlert(err.message);
}
// const data = getPostsArray();


// const thumbnailPictures = renderThumbnails(data);
// renderModal(thumbnailPictures, data);
validateForm();
