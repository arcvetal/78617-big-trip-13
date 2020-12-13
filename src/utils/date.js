import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.extend(duration);

export const showTime = (time) => {
  const transformedTime = time.format(`HH:mm`);
  return transformedTime;
};

export const getDateDiffDuration = (start, end) => {
  const durationEvent = dayjs.duration(end.diff(start)).as(`minutes`);

  const days = dayjs.duration(durationEvent, `minutes`).$d.days;
  const hours = dayjs.duration(durationEvent, `minutes`).$d.hours;
  const minutes = dayjs.duration(durationEvent, `minutes`).$d.minutes;

  return {
    days,
    hours,
    minutes
  };
};

export const formatDate = (time, format) => {
  return dayjs(time).format(format);
};

