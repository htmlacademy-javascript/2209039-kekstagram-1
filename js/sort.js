const defaultOrderButton = document.querySelector('#filter-default');
const randomOrderButton = document.querySelector('#filter-random');
const popularOrderButton = document.querySelector('#filter-discussed');

const classSwitcher = (target) => {
  const previousButton = document.querySelector('.img-filters__button--active');
  previousButton.classList.remove('img-filters__button--active');

  target.classList.add('img-filters__button--active');
};

const sortPhotos = (photos, cb) => {
  document.querySelector('.img-filters').
    classList.remove('img-filters--inactive');

  function removeEventListeners() {
    defaultOrderButton.removeEventListener('click', sortDefault);
    randomOrderButton.removeEventListener('click', sortRandom);
    popularOrderButton.removeEventListener('click', sortPopular);
  }

  function sortRandom () {
    classSwitcher(randomOrderButton);
    const newOrder = photos.slice().sort(() => Math.random() - 0.5);
    removeEventListeners();
    defaultOrderButton.addEventListener('click', sortDefault);
    popularOrderButton.addEventListener('click', sortPopular);
    cb(newOrder);
    return cb;
  }

  function sortPopular () {
    classSwitcher(popularOrderButton);
    const newOrder = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
    removeEventListeners(photos);
    defaultOrderButton.addEventListener('click', sortDefault);
    randomOrderButton.addEventListener('click', sortRandom);
    cb(newOrder);
    return cb;
  }

  function sortDefault () {
    classSwitcher(defaultOrderButton);
    const newOrder = photos.slice().sort((a, b) => a.id - b.id);
    removeEventListeners(photos);
    popularOrderButton.addEventListener('click', sortPopular);
    randomOrderButton.addEventListener('click', sortRandom);
    cb(newOrder);
    return cb;
  }
  sortDefault();
};

export { sortPhotos };
