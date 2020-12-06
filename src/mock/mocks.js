import dayjs from 'dayjs';

const MIN_PRICE = 10;
const MAX_PRICE = 100;

const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomPrice = () => {
  return getRandomInt(MIN_PRICE, MAX_PRICE);
};

const tripPointTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const locations = [`Milan`, `Rome`, `Madrid`, `Barcelona`, `Berlin`, `Paris`, `Amsterdam`];

let allAvailableOffers = [
  {id: `luggage`, offerLabel: `Add luggage`, offerPrice: getRandomPrice()},
  {id: `comfort`, offerLabel: `Switch to comfort class`, offerPrice: getRandomPrice()},
  {id: `meal`, offerLabel: `Add meal`, offerPrice: getRandomPrice()},
  {id: `seats`, offerLabel: `Choose seats`, offerPrice: getRandomPrice()},
  {id: `train`, offerLabel: `Travel by train`, offerPrice: getRandomPrice()}
];



// Генерация рандомного типа точки маршрута
const generateTripPointType = () => {
  const randomIndex = getRandomInt(0, tripPointTypes.length - 1);

  return tripPointTypes[randomIndex];
};

// Герерация рандомного города из списка
const generateCity = () => {
  const randomIndex = getRandomInt(0, locations.length - 1);

  return locations[randomIndex];
};

const generateEndTime = () => {
  const today = dayjs();

  const delayDays = 1;
  const delayHours = 5;
  const dalayMinutes = 30;

  const daysShift = getRandomInt(0, delayDays);
  const hoursShift = getRandomInt(0, delayHours);
  const minutesShift = getRandomInt(0, dalayMinutes);

  const end = today.add(daysShift, `day`).add(hoursShift, `hour`).add(minutesShift, `minutes`);

  return end;
};

// Генерация списка офферов
const generateOffers = () => {
  const MIN_OFFERS_COUNT = 0;
  const MAX_OFFERS_COUNT = 5;
  const randomOffersCount = getRandomInt(MIN_OFFERS_COUNT, MAX_OFFERS_COUNT);

  const offers = Array.from(allAvailableOffers);

  offers.length = randomOffersCount;

  return offers;
};

// Генерация опимания точки маршрута
const generateDescription = () => {
  const descriptionList = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const lastIndex = descriptionList.length - 1;
  const randomCountDescription = getRandomInt(1, 5);

  let randomDescriptionList = [];

  for (let i = 0; i < randomCountDescription; i++) {
    randomDescriptionList.push(descriptionList[getRandomInt(0, lastIndex)]);
  }

  const descr = randomDescriptionList.join(` `);

  return descr;
};

// Генерация галереи изображений точки маршрута
const generatePhotoGallery = () => {
  const MIN_COUNT = 1;
  const MAX_COUNT = 5;

  const photos = [];

  for (let i = 0; i < MAX_COUNT; i++) {
    photos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  photos.length = getRandomInt(MIN_COUNT, MAX_COUNT);

  return photos;
};

export const allOffers = () => {
  return allAvailableOffers;
};


// Генерация объекта-точки маршрута
export const generateTripPoint = () => {
  const start = dayjs();
  const end = generateEndTime();

  return {
    type: generateTripPointType(),
    location: generateCity(),
    start,
    end,
    offers: generateOffers(),
    description: generateDescription(),
    photoGallery: generatePhotoGallery(),
    tripPrice: getRandomInt(50, 200),
    isFavorite: Boolean(getRandomInt(0, 1)),
  };
};

export const allTypesAndLocations = () => {
  return {
    allTypes: tripPointTypes,
    allLocations: locations
  }
};


// Генерация масива объектов-точек маршрута
export const generateMocksCollection = (generatedItemCallback) => {
  const mocksCollection = [];
  const MOCKS_COUNT = 20;

  for (let i = 0; i < MOCKS_COUNT; i++) {
    mocksCollection.push(generatedItemCallback());
  }

  return mocksCollection;
};
