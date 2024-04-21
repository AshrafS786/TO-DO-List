import React, { useState } from 'react'

const Create = (props) => {
    const tasks = props.tasks;
    const settasks = props.settasks;

    const [title, settitle] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();  //for preventing reload of page.
        const newtask = ({title, completed : false});
    
        const copytasks = [...tasks];   //using spread operator for copying tasks. (new array mai tasks ko copy kia using spread operator)
        copytasks.push(newtask);
        settasks(copytasks);
    
        settitle("");  //input field ko empty krne ke liye 
      }

  return (
    <form className='w-[21rem] mx-auto flex align-center justify-center' onSubmit={SubmitHandler}>
    <input 
        className='p-2 px-4 w-3/4 bg-zinc-800 opacity-50 rounded-lg mr-5 text-white'
        type="text"
        placeholder='write your next task'
        onChange={(e) => settitle(e.target.value)}
        value={title}
    />
    <button className='bg-orange-700 h-10 w-10 text-white rounded-full'>
    <i className="ri-add-line text-black font-bold"></i>
    </button>
</form>
  )
}

export default Create