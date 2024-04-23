import { createContext, useState } from "react";

export const todocontext = createContext(null);

const Context = (props) => {
  const [tasks, settasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);
  return (
    <todocontext.Provider value={[tasks, settasks]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Context;
