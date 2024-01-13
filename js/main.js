import { renderThumbnails } from './thumbnails.js';
// import { getPostsArray } from './data.js';
import { renderModal } from './modal.js';
import { validateForm, setUserFormSubmit } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessWindow, showErrorWindow } from './messages.js';
import { showFitlters } from './sort.js';

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
  const thumbnailPictures = renderThumbnails(data);
  renderModal(thumbnailPictures, data);
  showFitlters();
} catch (err) {
  showAlert(err.message);
}
// const data = getPostsArray();


// const thumbnailPictures = renderThumbnails(data);
// renderModal(thumbnailPictures, data);
validateForm();
