const settings = () => {
    return (
        <form className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-11/12 h-2/5 md:w-1/2 lg:w-1/4 bg-[#fff] rounded-xl flex justify-center flex-col p-4 shadow-2xl text-sm md:text-base">
            <div className="h-[10%] border-b border-b-light_gray1">Settings</div>
            <div className="h-1/4 flex flex-col justify-center border-b border-b-light_gray1"><span>Email:</span> <input type="email" className="rounded-lg p-1 outline-none border w-full" /></div>
            <div className="h-1/4 flex flex-col justify-center border-b border-b-light_gray1"><span>Password:</span> <input type="password" className="rounded-lg p-1 outline-none border w-full" /></div>
            <div className="h-1/4 flex flex-col justify-center border-b border-b-light_gray1"><span>Re-Password:</span> <input type="password" className="rounded-lg p-1 outline-none border w-full" /></div>
            <div className="h-[15%] flex items-center justify-center">
                <button className="bg-bright_blue py-2 mt-5 px-4 rounded-full text-[#fff]">Submit</button>
            </div>
        </form>
    )
}

export default settings
