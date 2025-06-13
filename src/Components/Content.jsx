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

    //monitors "task" every time it changes
    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [tasks])

    let saveToLS = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    let handleAdd = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { val: newTask, isCompleted: false }]);
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
        setNewtask(editTask[0].val);
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
    let handleClearAll = () => {
        setTasks([])
        saveToLS()
    }
    let handleCheckbox = (index) => {
        let newTodo = [...tasks];
        newTodo[index].isCompleted = !newTodo[index].isCompleted;
        setTasks(newTodo);
        saveToLS()
    }



    return (
        <div className="toDoList flex flex-col items-center">
            {/* top */}
            <div className="top flex flex-col items-center  w-[40%]">

                <div className="flex mt-3">
                    <input className="focus:outline-none focus:ring-0 focus:border-none w-[250px] pl-5 text-black bg-white rounded-[50px]" value={newTask} onChange={handleInputChange} type="text" placeholder="Enter a task..." />
                    <button onClick={handleAdd} className="w-9 h-9 relative -left-[22px] text-3xl bg-[#93342c]  duration-300 text-white rounded-full">+</button>
                    <button onClick={handleClearAll} className="w-20 h-9 rounded-md border border-white bg-[#93342c]  duration-300 text-white">Clear all</button>
                </div>
            </div>

            {/* main-todo */}
            <div className="my-4 flex flex-col items-center  w-full">
                <h2 className="font-bold text-xl text-white">Your Todo List</h2>
                <hr className="w-[80%] mt-[19px] mb-[9px] border-black" />
                <div className="w-[90%] toDoList flex flex-col">

                    {tasks.length === 0 && <div className="my-3 w-full text-center text-xl">No Tasks to display 😪</div>}
                    {tasks.map((task, index) => (
                        <div key={index} className="toDo my-3 w-full flex justify-between">
                            <div className="flex gap-2">
                                <div className="flex justify-center items-center">
                                    <input className="h-5 w-5 rounded-full accent-[#93342c]" type="checkbox" name={index} onChange={() => handleCheckbox(index)} checked={task.isCompleted} id="" />
                                    <p className="flex justify-center items-center  text-white">&nbsp;{index + 1}. </p>
                                </div>
                                <div className="toDo-content text-lg flex items-center">
                                    <p className={`${task.isCompleted ? "line-through" : ""} break-words text-white w-[200px]`}>
                                        {task.val}
                                    </p>
                                </div>
                            </div>
                            <div className="toDo-buttons flex gap-3">
                                <button onClick={() => handleEdit(index)} className="w-9 h-9 rounded-full flex items-center justify-center border border-[#d1cfcfb8] text-white bg-[#93342c]  duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                    </svg>


                                </button>
                                <button onClick={() => handleDelete(index)} className="w-9 h-9 rounded-full flex items-center justify-center border border-[#d1cfcfb8] text-white bg-[#93342c]  duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                    </svg>

                                </button>
                                <button onClick={() => handleUp(index)} className="w-9 h-9 rounded-full flex items-center justify-center border border-[#d1cfcfb8] text-white bg-[#93342c]  duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </button>
                                <button onClick={() => handleDown(index)} className="w-9 h-9 rounded-full flex items-center justify-center border border-[#d1cfcfb8] text-white bg-[#93342c]  duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-5">
                                        <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Content