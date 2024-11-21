import { useState } from "react";
import Form from "../components/form";
import List from "../components/list";
import Stopwatch from "../components/stopwatch";
import style from "./App.module.scss"
import { TaskProps } from "../types/task";

function App() {
  const [tasks, setTasks] = useState<TaskProps[] | []>([])
  const [selected, setSelected] = useState<TaskProps>()

  function selectTask(selectedTask: TaskProps) {
    setSelected(selectedTask)
    setTasks(oldTaks => oldTaks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,
    })));
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true,
          }
        }
        return task;
      }))
    };
  };

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
