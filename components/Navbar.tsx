import React from 'react'
import add from "../public/icons/add_white.svg";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="w-[60vw] h-[84px] px-6 py-5 bg-gray-800 flex-col items-between justify-between flex">
            <div className="justify-between items-center flex">
                <div className="text-dark_gray dark:text-light_gray text-2xl font-bold font-saira leading-loose tracking-wider">Platform Launch</div>
                <div className="justify-start items-center gap-[22px] flex">
                    <div className="pl-4 pr-6 py-3 bg-indigo-500 rounded-[20px] shadow justify-center items-center gap-2 flex">
                        <Image src={add} width={12} height={12} alt="kanban" className="" />
                        <div className="text-center text-light_gray text-sm font-bold font-saira leading-none tracking-wide">Add New Task</div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Navbar