import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo, statusTodo, setFilter } from "../redux/actions/todoActions";

function EditTask () {
    const dispatch = useDispatch();
    const { priority, filter } = useSelector((state) => state.priority);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState ("");

    const handleUpdate = (id, value) => {
        setEditId(id);
        setEditValue(value);
      };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
      };
    
      const handleSaveUpdate = (id) => {
        dispatch(updateTodo(id, editValue));
        setEditId(null);
        setEditValue("");
      };
    
      const handleCancelUpdate = () => {
        setEditId(null);
        setEditValue("");
      }; 

      const handleStatusChange = (id) => {
        dispatch(statusTodo(id));
      };

    const handleFilter = (filter) => {
       dispatch(setFilter(filter))
     };

      const filteredTask = priority.filter((item) => {
        if (filter === "all") {
          return true;
        } else if (filter === "active") {
          return !item.completed;
        } else if (filter === "completed") {
          return item.completed;
        }
        return true;
      });
     
    return (
    <div>
    <div className="my-5">
        <button
        type="button"
        className="rounded-xl bg-slate-400 hover:bg-slate-500 px-2.5 py-1.5 mr-5 text-sm font-semibold hover:text-gray-950 text-white shadow-sm ring-1 ring-inset ring-slate-400 hove:bg-gray-50"
        onClick={() => handleFilter("all")} 
        >All
        </button>
        <button
        type="button"
        className="rounded-xl bg-green-400 hover:bg-green-500 px-2.5 py-1.5 mr-5 text-sm font-semibold hover:text-gray-950 text-white shadow-sm ring-1 ring-inset ring-green-400 hove:bg-gray-50"
        onClick={() => handleFilter("active")}>Active
        </button>
        <button
        type="button"
        className="rounded-xl bg-blue-600 hover:bg-blue-700 px-2.5 py-1.5 mr-5 text-sm font-semibold hover:text-gray-950 text-white shadow-sm ring-1 ring-inset ring-blue-600 hove:bg-gray-50"
        onClick={() => handleFilter("completed")}
        >Completed
        </button>
    </div>
    <div>
    {filteredTask.map((item) => (
        <div key={item.id}>
        {editId === item.id ? (
          <div>
            <input 
            type="text" 
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            />
            <button
            type="button"
            className="rounded-md bg-indigo-500 hover:bg-indigo-600 px-2.5 py-1.5 mr-5 ml-5 text-sm text-gray-950 shadow-md ring-1 ring-inset ring-gray-500 hove:bg-gray-50"
            onClick={() => handleSaveUpdate(item.id)}
            >save</button>
            <button
            type="button"
            className="rounded-md bg-slate-400 hover:bg-slate-500 px-2.5 mb-3  py-1.5 mr-5 text-sm text-gray-950 shadow-md ring-1 ring-inset ring-gray-500 hove:bg-gray-50"
            onClick={() => handleCancelUpdate(item.id)}
            >cancel</button>
          </div>
        ) : (
          <div>
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
              {item.value}
           </span>
        <button
        type="button"
        className="rounded-md px-2.5 py-1.5 mr-3 ml-5 text-sm text-gray-950 shadow-md ring-1 ring-inset bg-indigo-500 hover:bg-indigo-600 ring-gray-500 hove:bg-gray-50"
        onClick={() => handleUpdate(item.id, item.value)}
        >edit</button>
        <button
        type="button"
        className="rounded-md px-2.5 mb-3 py-1.5 mr-3 text-sm text-gray-950 shadow-md ring-1 ring-inset bg-red-600 hover:bg-red-700 ring-gray-500 hove:bg-gray-50"
        onClick={() => handleDelete(item.id)}
        >delete</button>
        <button
        type="button"
        className="rounded-md bg-slate-400 px-2.5 py-1.5 mr-3 text-sm text-gray-950 shadow-md ring-1 ring-inset ring-gray-500  hover:bg-gray-500"
        onClick={() => handleStatusChange(item.id)}>
         {item.completed ? "Mark Active" : "Mark Completed"}</button>
        </div>
       )}
        </div>
    ))}
    </div>
    </div>
 );
}

export default EditTask;