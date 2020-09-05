export const getAge = (moment, dob) => {
  let start = new Date(dob);
  let end = new Date();
  let range = moment.range(start, end);
  let age = range.diff("months");

  if (age === 1) {
    return `${age} month old`;
  } else if (age < 12) {
    return `${age} months old`;
  } else {
    age = range.diff("years");
    return `${age}`;
  }
};
