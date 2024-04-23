import { useContext, useState } from "react";
import { todocontext } from "../Contexts/Context";

const Create = () => {
  const [tasks, settasks] = useContext(todocontext);

  const [title, settitle] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault(); //for preventing reload of page.
    const newtask = { title, completed: false };

    const copytasks = [...tasks]; //using spread operator for copying tasks.
    copytasks.push(newtask);
    settasks(copytasks);

    settitle(""); //input field ko empty krne ke liye
  };

  return (
    <form
      className="w-[21rem] mx-auto flex align-center justify-center"
      onSubmit={SubmitHandler}
    >
      <input
        className="p-2 px-4 w-3/4 bg-zinc-900 opacity-50 rounded-lg mr-5 text-white"
        type="text"
        placeholder="Write your next Tasks..."
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <button className="bg-yellow-500 h-10 w-10 text-white rounded-full">
        <i className="ri-add-line text-black font-bold"></i>
      </button>
    </form>
  );
};

export default Create;
