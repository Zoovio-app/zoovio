import React from "react";

export const taskDatesArr = (tasks) => {
  let count = new Set();
  // eslint-disable-next-line
  return tasks.map((task) => {
    let value = new Date(task.due_date).getDate();
    if (!count.has(value)) {
      count.add(value);
      return value;
    }
  });
};

export const func = (date, dates, view) => {
  // eslint-disable-next-line
  return dates.map((element, i) => {
    if (view === "month" && date.getDate() === element) {
      return <div key={i} className="dotDiv"></div>;
    }
  });
};
