const defaultOrderButton = document.querySelector('#filter-default');
const randomOrderButton = document.querySelector('#filter-random');
const popularOrderButton = document.querySelector('#filter-discussed');

const classSwitcher = (target) => {
  const previousButton = document.querySelector('.img-filters__button--active');
  previousButton.classList.remove('img-filters__button--active');

  target.classList.add('img-filters__button--active');
};

const removePhotos = () => {
  Array.from(document.querySelectorAll('.picture')).forEach((item) => item.remove());
};

const activateSortButtons = (photos, cb) => {
  document.querySelector('.img-filters').
    classList.remove('img-filters--inactive');

  function sortRandom () {
    removePhotos();
    classSwitcher(randomOrderButton);
    const newOrder = photos.slice().sort(() => Math.random() - 0.5);
    cb(newOrder);
  }

  function sortPopular () {
    removePhotos();
    classSwitcher(popularOrderButton);
    const newOrder = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
    cb(newOrder);
  }

  function sortDefault () {
    removePhotos();
    classSwitcher(defaultOrderButton);
    const newOrder = photos.slice().sort((a, b) => a.id - b.id);
    cb(newOrder);
  }
  defaultOrderButton.addEventListener('click', sortDefault);
  randomOrderButton.addEventListener('click', sortRandom);
  popularOrderButton.addEventListener('click', sortPopular);
};

export { activateSortButtons };
