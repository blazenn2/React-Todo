const Todo = ({ todo, todoRemoval, changeStatus }) => {
    return (
        <div className="w-[90%] md:w-[55%] flex justify-center items-center bg-[#fff] first:rounded-t-md h-14 border-b border-light_gray1 last:border-none shadow-xl">
            <div className={`w-5 h-5 rounded-full cursor-pointer translate-x-3 z-50  flex items-center justify-center ${todo.done ? 'bg-gradient-to-br from-light_blue to-light_pink border border-[#fff]' : 'border border-light_gray2 hover:'}`} onClick={(e) => changeStatus(todo)}>
                <svg className={`${todo.done ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width={11} height={9}>
                    <path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304L3.696 7l6-6" />
                </svg>
            </div>
            <div className={`flex justify-between items-center rounded-md w-full  cursor-pointer px-5 josefin placeholder:josefin placeholder:text-xs bg-white focus:outline-none text-xs ${todo.done ? 'line-through text-light_gray2' : 'text-dark_blue2'}`}>
                {todo.task}
                <svg className="scale-75 cursor-pointer z-50" onClick={() => todoRemoval(todo)} xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Todo
