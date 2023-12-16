import {getRandomInteger, getId} from './util.js';

const getPostId = getId();
const getCommentId = getId();


const descriptions = ['Это мой кот',
  'Это не мой кот',
  'Это немой кот',
  'Не мой моего кота',
  'Мой не моего кота',
  'И кот не тот, и я не та'
];

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Максим ',
  'Александра',
  'Марк',
  'Анатолий ',
  'Полина',
  'Василиса',
  'Лев',
  'Тимофей',
  'Семён',
  'Кристина'
];

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: messages[getRandomInteger(0, messages.length - 1)],
  name: names[getRandomInteger(0, names.length - 1)]
});

const getCommentsArray = () => {
  const commentsQuantity = getRandomInteger(1, 15);
  return Array.from({length: commentsQuantity}, createComment);
};

const createPost = () => {
  const id = getPostId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getCommentsArray()
  };
};

const getPostsArray = () => Array.from({length: 25}, createPost);

export { getPostsArray };
