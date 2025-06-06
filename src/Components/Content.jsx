import { useState, useEffect } from "react"


function Content() {

    let [newTask, setNewtask] = useState(""); // input task
    let [tasks, setTasks] = useState([]); // Holds all tasks

    useEffect(() => {
        let saved = localStorage.getItem("tasks");
        if (saved) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            setTasks(tasks)
        }
    }, [])

    let saveToLS = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
    
    //monitors "task" every time it changes
    useEffect ( () => {
        if(tasks.length>0){
        localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    },[tasks])

    let handleAdd = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewtask("");
        }
        saveToLS()
    }
    
    let handleDelete = (index) => {
        let updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
        saveToLS()
    }
    let handleEdit = (index) => {
        let editTask = tasks.filter((_, i) => i === index);
        setNewtask(editTask[0]);
        let updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
        saveToLS()
    }
    let handleUp = (index) => {
        let updateTasks = [...tasks];
        if (index > 0) {
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
        }
        setTasks(updateTasks);
        saveToLS()
    }
    let handleDown = (index) => {
        let updateTasks = [...tasks];
        if (index < updateTasks.length - 1) {
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
        }
        setTasks(updateTasks);
        saveToLS()
    }
    let handleInputChange = (e) => {
        setNewtask(e.target.value)
    }
    let handleClearAll= ()=>{
        setTasks([]);
        saveToLS()
    }


    return (
        <div className="toDoList flex flex-col items-center">
            {/* top */}
            <div className="top flex flex-col items-center bg-yellow-200 w-[40%]">
                <h1 className="font-bold text-2xl">To-Do List App</h1>
                <div className="flex gap-6 mt-3">
                    <input className="w-[350px] pl-2 rounded-[10px]" value={newTask} onChange={handleInputChange} type="text" placeholder="Enter a task..." />
                    <button onClick={handleAdd} className="w-16 h-9 rounded-md bg-purple-700 hover:bg-purple-900 duration-300 text-white">Add</button>
                    <button onClick={handleClearAll} className="w-20 h-9 rounded-md bg-purple-700 hover:bg-purple-900 duration-300 text-white">Clear all</button>
                </div>
            </div>

            {/* main-todo */}
            <div className="my-4 flex flex-col items-center bg-yellow-200 w-[40%]">
                <h2 className="font-bold text-lg">Your Todo List</h2>
                <hr className="w-[80%] border-black" />
                <div className="w-[90%] toDoList flex flex-col">

                    {tasks.length === 0 && <div className="my-3 w-full text-center text-xl">No Tasks to display 😪</div>}
                    {tasks.map((task, index) => (
                        <div key={index} className="toDo my-3 w-full flex justify-between">
                            <div className="toDo-content text-lg"><p>{index + 1}. &nbsp;&nbsp; {task}</p></div>
                            <div className="toDo-buttons flex gap-3">
                                <button onClick={() => handleEdit(index)} className="py-1 px-3 text-sm rounded-md text-white bg-purple-700 hover:bg-purple-900 duration-300">Edit</button>
                                <button onClick={() => handleDelete(index)} className="py-1 px-3 text-sm rounded-md text-white bg-purple-700 hover:bg-purple-900 duration-300">Delete</button>
                                <button onClick={() => handleUp(index)} className="py-1 px-3 text-sm rounded-md text-white bg-purple-700 hover:bg-purple-900 duration-300">☝️</button>
                                <button onClick={() => handleDown(index)} className="py-1 px-3 text-sm rounded-md text-white bg-purple-700 hover:bg-purple-900 duration-300">👇</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Content