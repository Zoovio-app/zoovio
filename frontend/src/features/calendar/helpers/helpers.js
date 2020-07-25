import React from "react";

export const taskDatesArr = (tasks) => {
  return tasks.map((task) => {
    return new Date(task.due_date).getDate();
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
