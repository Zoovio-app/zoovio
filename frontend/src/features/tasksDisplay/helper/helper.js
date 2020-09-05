export const strFormat = (str) => {
  let timeOfDay = str.slice(8, str.length);
  let time = str.slice(0, 4);
  return `${time} ${timeOfDay}`;
};
