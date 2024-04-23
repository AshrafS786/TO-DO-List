import React, { useState } from 'react'
import { todocontext } from '../Contexts/Context';

const Header = (props) => {
  const [tasks, setTasks] = useState(todocontext)

    const tasks = props.tasks;
    const settasks = props.settasks;
  return (
    <div> 

    <h1 className='text-white absolute left-12 top-6 font-medium'>XERO<span className='text-orange-500'>TODO</span></h1>

    <h1 className='text-white absolute right-12 top-6'>
    <i className="ri-share-forward-box-line font-thin"></i>
    </h1>

    <div className='flex text-xl justify-between items-center align-center p-10 w-[21rem] h-[11rem] border rounded-2xl mx-auto mt-16 md:mt-6'>
       <div>
        <h1 className='text-stone-200 font-bold text-2xl'>ToDo Done</h1> 
        <h6 className='text-stone-200 text-xs tracking-widest'>Keep it up</h6>
      </div>
      <div className='w-20 h-20 bg-orange-700 rounded-full flex items-center justify-center'>
        <h3 className='text-black font-bold'>{tasks.filter(t => t.completed === true).length} / {tasks.length}</h3>
      </div>
    </div>
    </div>
  )
}

export default Header