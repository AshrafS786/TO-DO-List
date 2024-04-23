const Show = (props) => {
  const [tasks, setTasks] = useState(todocontext);

  const tasks = props.tasks;
  const settasks = props.settasks;

  const CompleteTaskToggle = (i) => {
    const copyTasks = [...tasks];
    copyTasks[i].completed = !tasks[i].completed;
    settasks(copyTasks);
  };

  const DeleteHandler = (i) => {
    const copytasks = [...tasks];

    let isvalid = false;
    if (!copytasks[i].completed) {
      isvalid = confirm("Do you really want to delete this task ??");
    }
    if (isvalid || copytasks[i].completed) {
      copytasks.splice(i, 1);
      settasks(copytasks);
    }
  };

  let taskrender = <h1 className="text-stone-200">No Task Alloted</h1>;
  if (tasks.length > 0) {
    taskrender = tasks.map((task, index) => (
      <li
        className="flex justify-between items-center px-5 w-[20rem] h-[2.8rem] border rounded-md text-stone-200 font-semibold bg-zinc-800 mt-2"
        key={index}
      >
        <div className="flex gap-2 justify-center items-center">
          <div
            onClick={(e) => CompleteTaskToggle(index)}
            className={`${
              task.completed ? "bg-green-500" : "border"
            } h-5 w-5 rounded-full border-red-700`}
          ></div>
          <h1 className={`${task.completed && "line-through"}`}>
            {task.title}
          </h1>
        </div>

        <div className="flex gap-2">
          <i className="ri-edit-line text-stone-200 font-normal"></i>
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
