import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../Redux/Tasks/task.actions";
import TasksCard from "../components/TaskCard/TaskCard";

function TasksPage() {
  const [tasks, setTask] = useState([]);

  const { data } = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();
  // console.log(data);
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    setTask(data);
  }, [data]);
  return (
    <>
      <div>
        {tasks.map((el, index) => (
          <TasksCard {...el} key={index} />
        ))}
      </div>
    </>
  );
}

export default TasksPage;
