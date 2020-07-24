import React from "react";
import { Calendar } from "react-calendar";
import "./css/styles.css";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { pageVariants, pageTransition } from "../../util/framerStyles";

const CalendarPage = () => {
  const history = useHistory();
  const dayClick = (e) => {
    console.log(new Date(e));
    history.push("/calendar/tasks");
  };

  const func = (date, dates, view) => {
    // eslint-disable-next-line
    return dates.map((element, i) => {
      if (view === "month" && date.getDate() === element) {
        return <div key={i} className="dotDiv"></div>;
      }
    });
  };

  const check = [4, 21, 17];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="calDiv"
    >
      <Calendar
        className={"cally"}
        showNavigation={false}
        tileContent={({ activeStartDate, date, view }) =>
          func(date, check, view)
        }
        onClickDay={dayClick}
      />
    </motion.div>
  );
};

export default CalendarPage;
