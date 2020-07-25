import React, { useEffect, useContext, useState } from "react";
import { Calendar } from "react-calendar";
import "./css/styles.css";
import "react-calendar/dist/Calendar.css";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { taskDatesArr, func } from "./helpers/helpers";

const CalendarPage = () => {
  const API = apiUrl();
  const history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const [currentDate, setCurrentDate] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const [tasks, setTasks] = useState([]);

  const dayClick = (e) => {
    let t = new Date(e);
    console.log(t.toISOString().slice(0, 10));
    history.push("/calendar/tasks");
  };

  const onClick = (value, e) => {
    setCurrentDate({
      month: new Date(value.activeStartDate).getMonth() + 1,
      year: new Date(value.activeStartDate).getFullYear(),
    });
  };

  useEffect(() => {
    const getMonthsTasks = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: `${API}/api/users/tasks/month/${currentDate.month}?user=${currentUser.id}&year=${currentDate.year}`,
        });
        setTasks(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getMonthsTasks();
  }, [API, currentDate.month, currentDate.year, currentUser.id]);

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
        showNavigation={true}
        tileContent={({ activeStartDate, date, view }) =>
          func(date, taskDatesArr(tasks), view)
        }
        onClickDay={dayClick}
        onClickMonth={onClick}
        value={new Date()}
        onActiveStartDateChange={onClick}
        showNeighboringMonth={false}
      />
    </motion.div>
  );
};

export default CalendarPage;
