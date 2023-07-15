import { padZero } from "./string";

export const getDateString = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = padZero(dateObj.getMonth() + 1, 2);
  const day = padZero(dateObj.getDate(), 2);

  return `${year}-${month}-${day}`;
};
