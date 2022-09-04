const Header = () => {
    return (
        <div className='h-[200px] bg-mobile-l bg-cover md:flex md:justify-center md:bg-desktop-l md:h-[250px] lg:h-[400px]'>
            <div className="h-[40%] flex items-end justify-between md:w-1/2 lg:w-2/5 pb-2 px-6">
                <h1 className="text-light_gray font-bold text-2xl md:text-3xl lg:text-5xl tracking-[0.75rem] md:tracking-[1.25rem] lg:tracking-[1.75rem]">TODO</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="26" height="26">
                    <path
                        fill="#FFF"
                        fillRule="evenodd"
                        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                    ></path>
                </svg>
            </div>
        </div>
    )
}

export default Header
