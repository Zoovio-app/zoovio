import React from "react";
import { motion } from "framer-motion";
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from "../../../util/framerStyles";
import TasksDisplay from "../../tasksDisplay/TasksDisplay";

const Tasks = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      TASKS
      <TasksDisplay />
    </motion.div>
  );
};

export default Tasks;
