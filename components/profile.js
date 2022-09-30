import { useState } from "react"

const profile = ({ setCredentials, mode, user }) => {
    const [showSetting, setShowSetting] = useState(false);
    console.log(user)
    return (
        <>
            <button className={`bg-profile h-8 w-8 md:h-10 lg:h-12 md:w-10 lg:w-12 bg-cover bg-no-repeat rounded-full border absolute right-5 top-5 cursor-pointer ${mode ? "bg-[#fff]" : "bg-dark_blue_light"}`} onClick={e => setShowSetting(!showSetting)}></button>
            <div className={`${showSetting ? "" : "hidden"}  absolute right-5 top-14 md:top-16 lg:top-20 w-60 h-40 ${mode ? "bg-[#fff]" : "bg-dark_blue_light"} z-50 rounded-xl shadow-xl text-sm md:text-base`}>
                <div className={`h-2/5 flex items-center justify-center border-b  ${mode ? "border-b-light_gray1" : "border-b-dark_gray3 text-[#fff]"}`}>Welcome <span className="font-bold pl-1">{user}</span></div>
                <div className={`h-[30%] flex items-center justify-center border-b ${mode ? "border-b-light_gray1" : "border-b-dark_gray3"} text-bright_blue cursor-pointer ${mode ? "hover:bg-light_gray" : "hover:bg-dark_blue2"}`} onClick={e => {
                    setCredentials(true);
                    setShowSetting(!showSetting);
                }}>Change credentials</div>
                <div className={`h-[30%] flex items-center justify-center border-b-light_gray1 text-bright_blue cursor-pointer ${mode ? "hover:bg-light_gray" : "hover:bg-dark_blue2"} hover:rounded-b-xl`}>Logout</div>
            </div>
        </>
    )
}

export default profile
