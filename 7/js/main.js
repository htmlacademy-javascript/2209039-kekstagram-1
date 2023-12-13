import {renderThumbnails} from './thumbnails.js';
import {getPostsArray} from './data.js';
import {renderModal} from './modal.js';

const data = getPostsArray();
const thumbnailPictures = renderThumbnails(data);
renderModal(thumbnailPictures, data);
