const Todo = ({ todo, todoRemoval, changeStatus, mode, index, changeIndexOnDrag }) => {
    const handleDragStart = e => {
        const data = JSON.stringify({ type: todo, index: index });
        e.dataTransfer.setData("text/plain", data);
    };

    const handleDragEnd = e => e.dataTransfer.clearData();

    const handleDragOver = e => {
        if (e.dataTransfer.types[0] === "text/plain") e.preventDefault();
    };

    const handleDrop = e => {
        const dataJSON = e.dataTransfer.getData("text/plain");
        let data;
        try {
            data = JSON.parse(dataJSON);
        } catch (err) {
            console.error(err);
        }

        changeIndexOnDrag(data, index);
    };

    return (
        <div className={`${!mode ? 'bg-dark_blue2' : 'bg-[#fff]'} w-[90%] md:w-[55%] flex justify-center items-center  first:rounded-t-md h-14 border-b ${mode ? 'border-light_gray1' : 'border-dark_gray3'}  last:border-none shadow-xl`} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className={`w-5 h-5 rounded-full cursor-pointer translate-x-3 z-50 flex items-center justify-center ${todo.done ? `bg-gradient-to-br from-light_blue to-light_pink border ${mode ? 'border-[#fff]' : 'border-dark_blue2'}` : 'border border-light_gray2 hover:'}`} onClick={(e) => changeStatus(todo)}>
                <svg className={`${todo.done ? 'block m-1' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" width={11} height={9}>
                    <path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304L3.696 7l6-6" />
                </svg>
            </div>
            <div className={`flex justify-between items-center rounded-md w-11/12 lg:w-full cursor-pointer px-5 josefin placeholder:josefin placeholder:text-xs bg-white focus:outline-none text-xs ${todo.done ? 'line-through text-light_gray2 ' : `${!mode ? 'text-dark_gray1' : 'text-dark_blue2'}`}`}>
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
