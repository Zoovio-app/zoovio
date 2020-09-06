export const strFormat = (str) => {
  let timeOfDay = str.slice(8, str.length);
  let time = "";
  if (str.length > 10) {
    time = str.slice(0, 5);
    return `${time} ${timeOfDay}`;
  } else {
    time = str.slice(0, 4);
    return `${time} ${timeOfDay}`;
  }
};
