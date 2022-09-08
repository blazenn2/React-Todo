import { useState } from "react"
import Todo from "./Todo.js"

const TodoList = () => {
    const [check, setCheck] = useState(false);
    const [todo, setTodo] = useState([]);
    const [display, setDisplay] = useState(0);

    const keyPressHandler = (e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            setTodo([...todo, { task: e.target.value, done: check }]);
            e.target.value = "";
            setCheck(false);
        }
    };

    const removeTodoHandler = (todoText) => {
        const array = [...todo];
        const index = array.indexOf(todoText)
        if (index !== -1) {
            array.splice(index, 1);
            setTodo(array);
        }
    };

    const setDoneHandler = (todoText) => {
        const array = [...todo];
        const index = array.indexOf(todoText)
        if (index !== -1) {
            array[index].done = !array[index].done;
            setTodo(array);
        }
    };

    const clearStatusHandler = () => {
        const array = todo.map(val => ({ task: val.task, done: false }));
        console.log(array);
        setTodo(array);
    };

    return (
        <div className="flex justify-center -translate-y-24 items-center flex-col">
            <div className="w-[90%] md:w-[55%] lg:w-[40%] flex justify-center items-center mb-5 -translate-x-3">
                <div className={`w-5 h-5 rounded-full cursor-pointer translate-x-8 z-50  flex items-center justify-center ${check ? 'bg-gradient-to-br from-light_blue to-light_pink border border-[#fff]' : 'border border-light_gray2 hover:'}`} onClick={() => setCheck(!check)}>
                    <svg className={`${check ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width={11} height={9}>
                        <path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304L3.696 7l6-6" />
                    </svg>
                </div>
                <input type="text" className="rounded-md w-full pl-10 py-5 placeholder:josefin placeholder:text-xs text-xs bg-white focus:outline-none" placeholder="Create a new todo ..." onKeyPress={keyPressHandler} />
            </div>
            <div className="flex flex-col items-center w-[95%] lg:w-[70%]">
                {todo.map((val, i) => {
                    if (display === 0) return (<Todo key={i} todoRemoval={removeTodoHandler} changeStatus={setDoneHandler} todo={val} />);
                    if (display === 1 && val.done === false) return (<Todo key={i} todoRemoval={removeTodoHandler} changeStatus={setDoneHandler} todo={val} />)
                    if (display === 2 && val.done === true) return (<Todo key={i} todoRemoval={removeTodoHandler} changeStatus={setDoneHandler} todo={val} />)
                })}
                <div className="flex items-center justify-between w-[90%] md:w-[55%] bg-[#fff] text-xs rounded-b-md first:rounded-t-md h-16 border-b border-light_gray1 last:border-none shadow-xl px-3">
                    <div className="josefin text-light_gray2">{todo.filter(val => val.done === false).length} items left</div>
                    <div className="josefin text-light_gray2 hover:text-light_gray2_hover cursor-pointer" onClick={() => clearStatusHandler()}>Clear Completed</div>
                </div>
            </div>
            <div className="flex justify-evenly items-center mt-10 px-10 w-[85%] lg:w-[70%] text-sm bg-[#fff] rounded-md h-14 border-b border-light_gray1 last:border-none shadow">
                <p className={`font-bold cursor-pointer ${display === 0 ? 'text-bright_blue' : 'text-light_gray2 hover:text-light_gray2_hover'}`} onClick={() => setDisplay(0)}>All</p>
                <p className={`font-bold cursor-pointer ${display === 1 ? 'text-bright_blue' : 'text-light_gray2 hover:text-light_gray2_hover'}`} onClick={() => setDisplay(1)}>Active</p>
                <p className={`font-bold cursor-pointer ${display === 2 ? 'text-bright_blue' : 'text-light_gray2 hover:text-light_gray2_hover'}`} onClick={() => setDisplay(2)}>Completed</p>
            </div>
        </div>
    )
}

export default TodoList
