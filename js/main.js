import { renderThumbnails } from './thumbnails.js';
// import { getPostsArray } from './data.js';
import { validateForm, setUserFormSubmit } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './util.js';
import { showSuccessWindow, showErrorWindow } from './messages.js';
import { activateSortButtons } from './sort.js';
import './avatar.js';

const TIMEOUT_DELAY = 500;

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
  renderThumbnails(data);
  activateSortButtons(data, debounce (renderThumbnails, TIMEOUT_DELAY));
} catch (err) {
  showAlert(err.message);
}
// const data = getPostsArray();


// const thumbnailPictures = renderThumbnails(data);
// renderModal(thumbnailPictures, data);
validateForm();
