import { useState } from "react"

const profile = () => {
    const [showSetting, setShowSetting] = useState(true);
    return (
        <>
            <div className="bg-profile h-8 w-8 md:h-10 lg:h-12 md:w-10 lg:w-12 bg-cover bg-no-repeat rounded-full border absolute right-5 top-5 cursor-pointer bg-[#fff]" onClick={e => setShowSetting(!showSetting)}>
            </div>
            <div className={`${showSetting ? "" : "hidden"} transition ease-in-out delay-150 absolute right-5 top-14 md:top-16 lg:top-20 w-60 h-40 bg-[#fff] z-50 rounded-xl shadow-xl text-sm md:text-base`}>
                <div className="h-2/5 flex items-center justify-center border-b border-b-light_gray1">Welcome <span className="font-bold pl-1">John Doe</span></div>
                <div className="h-[30%] flex items-center justify-center border-b border-b-light_gray1 text-bright_blue cursor-pointer hover:bg-light_gray">Change credentials</div>
                <div className="h-[30%] flex items-center justify-center border-b-light_gray1 text-bright_blue cursor-pointer hover:bg-light_gray hover:rounded-xl">Logout</div>
            </div>
        </>
    )
}

export default profile
