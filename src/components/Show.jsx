import { useContext, useState } from "react";
import { todocontext } from "../Contexts/Context";

const Show = () => {
  const [tasks, settasks] = useContext(todocontext);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const CompleteTaskToggle = (i) => {
    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    settasks(copyTasks);
  };

  const DeleteHandler = (i) => {
    const copytasks = [...tasks];

    let isvalid = false;
    if (!copytasks[i].completed) {
      isvalid = window.confirm("Do you really want to delete this task ??");
    }
    if (isvalid || copytasks[i].completed) {
      copytasks.splice(i, 1);
      settasks(copytasks);
    }
  };

  const EditHandler = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditedTaskText(taskToEdit.title);
  };

  const SaveEditHandler = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: editedTaskText };
      }
      return task;
    });
    settasks(updatedTasks);
    setEditingTaskId(null);
  };

  let taskrender = (
    <h1 className="text-center text-red-700 font-bold text-2xl">
      Not Mention Tasks...
    </h1>
  );
  if (tasks.length > 0) {
    taskrender = tasks.map((task, index) => (
      <li
        className="flex justify-between items-center px-5 w-[20rem] h-[2.8rem] border rounded-md text-stone-200 font-semibold bg-zinc-800 mt-2"
        key={index}
      >
        <div className="flex gap-2 justify-center items-center">
          <div
            onClick={() => CompleteTaskToggle(index)}
            className={`${
              task.completed ? "bg-green-500" : "border"
            } h-5 w-5 rounded-full border-red-500`}
          ></div>
          {editingTaskId === task.id ? (
            <input className="text-black bg-slate-200 rounded-sm"
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
            />
          ) : (
            <h1 className={`${task.completed && "line-through"}`}>
              {task.title}
            </h1>
          )}
        </div>

        <div className="flex gap-2">
          {editingTaskId === task.id ? (
            <i
              onClick={() => SaveEditHandler(task.id)}
              className="ri-save-line text-stone-200 font-normal"
            ></i>
          ) : (
            <i
              onClick={() => EditHandler(task.id)}
              className="ri-edit-line text-stone-200 font-normal"
            ></i>
          )}
          <i
            onClick={() => DeleteHandler(index)}
            className="ri-delete-bin-7-line text-stone-200 font-normal"
          ></i>
        </div>
      </li>
    ));
  }

  return <ul className="list-disc mt-4 mx-auto">{taskrender}</ul>;
};

export default Show;
