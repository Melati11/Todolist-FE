import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

function AddTask() {
    const dispatch = useDispatch()
    const [input,setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault()
        // console.log(input)
        dispatch(addTodo(input));
        setInput("")
    };

    return (
     <div>
        <form>
            <input 
            className="w-64 p-1 rounded border-2 border-gray-400"
            type="text"
            placeholder="Input Your Activity" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button
            className="flex-no-shrink w-24 p-1 ml-2 border-2 rounded text-black bg-blue-400 hover:text-slate-50 hover:bg-blue-500"
            onClick={handleAddTask}>
               Add
            </button>
        </form>
     </div>
   );
}

export default AddTask;