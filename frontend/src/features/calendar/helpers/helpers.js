import React from "react";

export const taskDatesArr = (tasks) => {
  let count = new Set(
    tasks.map((task) => {
      return new Date(
        task.due_date.slice(0, task.due_date.length - 1)
      ).getDate();
    })
  );
  return [...count];
};

export const func = (date, dates, view) => {
  return dates.map((element, i) => {
    if (view === "month" && date.getDate() === element) {
      return <div key={i} className="dotDiv"></div>;
    } else {
      return null;
    }
  });
};
