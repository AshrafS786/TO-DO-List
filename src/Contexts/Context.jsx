import { createContext, useState } from 'react'

export const todocontext = createContext(null)

const Context = (props) => {
    const [tasks, setTasks] = useState([
        { title: "Task 1", completed: false },
        // { title: "Task 2", completed: false },
      ]);
  return (
    <todocontext.Provider value={[tasks, setTasks]}>
      {props.children}
    </todocontext.Provider>
  )
}

export default Context
