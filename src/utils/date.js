
export const showTime = (time) => {
  const transformedTime = time.format('HH:mm');
  return  transformedTime;
};

export const timeConverter = (start, end) => {
  const durationMinutes = start.diff(end, 'minutes');

  const timePoint = Math.abs(durationMinutes);

  let minutes = timePoint;
  let hours;
  let days;

  if (minutes > 60) {
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
  }

  if (hours > 24) {
    days = Math.floor(hours/24);
    hours = hours % 24;
  }

  return {
    days,
    hours,
    minutes
  }
};

