import React from 'react'

import Header from './assets/components/Header';

import Create from './assets/components/Create';

import Show from './assets/components/Show';

import { useState } from "react";

const App = () => {

  //list rendering or showing object using useState:

  const [tasks, settasks] = useState([
    {title : "Task 1", completed : false},
    {title : "Task 2", completed : false},
    {title : "Task 3", completed : false}
  ]);
  
  const [count, setcount] = useState();

  const addTask = (task) => {
    settasks([...tasks, task]);
  }

  return (
    // list rendering or showing object using useState:

    <div className="w-screen h-screen bg-gray-950 flex justify-start items-center flex-col"> 
    <Header tasks={tasks} />
   
    <div className="mt-4 flex align-center items-center flex-col">
        <Create tasks={tasks} settasks={settasks} />

        <Show tasks={tasks} settasks={settasks} />
    </div>

    </div>
  )
}

export default App


//we will perform curd operations and the only u -> update will not work
//total number of tasks will show
//delete feature will work

//-create form -> for adding task, title : task name, completed : false

//render all task in the view 

//-- create functionality to mark task completed.
//--- counter to check completed task out of total task.
//---- delete the particular task.
