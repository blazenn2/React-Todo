const settings = ({ setCredentials, mode }) => {
    return (
        <form className={`absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-11/12 h-2/5 md:w-1/2 lg:w-2/5 ${ mode ? "bg-[#fff]" : "bg-dark_blue_light"}  rounded-xl flex justify-around flex-col p-4 shadow-2xl text-sm md:text-base`}>
            <div className={`h-1/6 border-b ${mode ? "border-b-light_gray1" : "border-b-dark_gray3"} text-base md:text-lg flex items-center justify-between`}>
                <span className={`font-bold ${mode? "" : "text-light_gray2"}`}>Settings</span>
                <button onClick={e => {
                    setCredentials(false);
                    e.preventDefault();
                }}>
                    <svg className="scale-75 cursor-pointer z-50" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path
                            fill="#494C6B"
                            fillRule="evenodd"
                            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className={`h-1/6 flex flex-row items-center justify-between border-b ${mode ? "border-b-light_gray1" : "border-b-dark_gray3"}`}><span className={`w-1/5 mr-2 ${mode? "" : "text-light_gray2"}`}>Email:</span> <input type="email" className={`rounded-lg py-1 pl-3 outline-none ${mode ? "bg-dark_gray1_hover" : "bg-light_gray1_hover"} w-4/5`} /></div>
            <div className={`h-1/6 flex flex-row items-center justify-between border-b ${mode ? "border-b-light_gray1" : "border-b-dark_gray3"}`}><span className={`w-1/5 mr-2 ${mode? "" : "text-light_gray2"}`}>Password:</span> <input type="password" className={`rounded-lg py-1 pl-3 outline-none ${mode ? "bg-dark_gray1_hover" : "bg-light_gray1_hover"} w-4/5`} /></div>
            <div className={`h-1/6 flex flex-row items-center justify-between border-b ${mode ? "border-b-light_gray1" : "border-b-dark_gray3"}`}><span className={`w-1/5 mr-2 ${mode? "" : "text-light_gray2"}`}>Re-Password:</span> <input type="password" className={`rounded-lg py-1 pl-3 outline-none ${mode ? "bg-dark_gray1_hover" : "bg-light_gray1_hover"} w-4/5`} /></div>
            <div className="h-1/5 flex items-center justify-center">
                <button type="submit" className="bg-bright_blue py-2 px-4 rounded-full text-[#fff]">Submit</button>
            </div>
        </form>
    )
}

export default settings
