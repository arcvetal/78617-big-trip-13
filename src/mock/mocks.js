import dayjs from 'dayjs';

const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

// Генерация рандомного типа точки маршрута
const generateTripPointType = () => {
  const typeTripPoint = ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

  const randomIndex = getRandomInt(0, typeTripPoint.length - 1);

  return typeTripPoint[randomIndex];
};

// Герерация рандомного города из списка
const generateCity = () => {
  const cityList = ['Milan', 'Rome', 'Madrid', 'Barcelona', 'Berlin', 'Paris', 'Amsterdam'];

  const randomIndex = getRandomInt(0, cityList.length - 1);

  return cityList[randomIndex];
};

const generateDuration = () => {
  const today = dayjs();

  const start = today.format('DD/MM/YYYY H:m');
  const startTime = today.format('HH:mm');
  const startDate = today.format('MMM DD');

  const delayDays = 7;
  const delayHours = 10;
  const dalayMinutes = 30;

  const daysShift = getRandomInt(0, delayDays);
  const hoursShift = getRandomInt(0, delayHours);
  const minutesShift = getRandomInt(0, dalayMinutes);

  const finishDelay = today.add(daysShift, 'day').add(hoursShift, 'hour').add(minutesShift, 'minutes');

  const finish = finishDelay.format('DD/MM/YYYY H:m');
  const finishTime = finishDelay.format('HH:mm');
  const finishDate = finishDelay.format('MMM DD');

  return {
    start,
    startTime,
    startDate,
    finish,
    finishTime,
    finishDate
  }
};


// Генерация списка офферов
const generateOffers = () => {
  const OFFERS_COUNT = 5;
  const randomOffersCount = getRandomInt(0, OFFERS_COUNT);

  const getRandomPrice = () => {
    return getRandomInt(0, 100);
  };

  const offersList = [
    {id: 'luggage', offerTitle: 'Add luggage', offerPrice: getRandomPrice()},
    {id: 'comfort', offerTitle: 'Switch to comfort class', offerPrice: getRandomPrice()},
    {id: 'meal', offerTitle: 'Add meal', offerPrice: getRandomPrice()},
    {id: 'seats', offerTitle: 'Choose seats', offerPrice: getRandomPrice()},
    {id: 'train', offerTitle: 'Travel by train', offerPrice: getRandomPrice()}
  ];

  offersList.length = randomOffersCount;

  return offersList;

};

// Генерация опимания точки маршрута
const generateDescription = () => {
  const descriptionList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.'
  ];

  const lastIndex = descriptionList.length - 1;
  const randomCountDescription = getRandomInt(1, 5);

  let randomDescriptionList = [];

  for (let i = 0; i < randomCountDescription; i++) {
    randomDescriptionList.push(descriptionList[getRandomInt(0, lastIndex)])
  }

  const descr = randomDescriptionList.join(' ');

  return descr;
};

// Генерация галереи изображений точки маршрута
const generatePhotoGallery = () => {
  const MIN_COUNT = 1;
  const MAX_COUNT = 5;

  const photoList = [];

  for (let i = 0; i < MAX_COUNT; i++) {
    photoList.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  photoList.length = getRandomInt(MIN_COUNT, MAX_COUNT);

  return photoList;
};


//Генерация объекта-точки маршрута
export const generateTripPoint = () => {
  return {
    typeTripPoint: generateTripPointType(),
    city: generateCity(),
    duration: generateDuration(),
    offersList: generateOffers(),
    description: generateDescription(),
    photoGallery: generatePhotoGallery(),
    tripPrice: getRandomInt(50, 200),
    isFavorite: Boolean(getRandomInt(0, 1))
  }
};

//Генерация масива объектов-точек маршрута
export const generateMocksCollection = (generatedItemCallback) => {
  const mocksCollection = [];
  const MOCKS_COUNT = 20;

  for (let i = 0; i < MOCKS_COUNT; i++) {
    mocksCollection.push(generatedItemCallback());
  }

  return mocksCollection;
};
