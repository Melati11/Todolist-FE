import React from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";

function App() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center font-serif bg-blue-300">
    <div className="bg-white rounded-lg shadow-xl p-8 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-slate-800 font-serif">Activity List</h1>
      <AddTask/>
      <EditTask/>   
    </div>
    </div>
  )
}

export default App;
