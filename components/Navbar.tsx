'use client';
import React from 'react'
import add from "../public/icons/add_white.svg";
import Image from "next/image";
import dots_light from "../public/icons/dots_light.svg";
import dots_dark from "../public/icons/dots_dark.svg";
import { useTheme } from "next-themes";
import FormAddTask from './FormAddTask';

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    return (
        <div className="w-[60vw] h-[84px]  py-5 bg-gray-800 flex-col items-between justify-between flex">
            <div className="justify-between items-center flex">
                <div className="text-dark_gray dark:text-light_gray text-2xl font-bold font-saira leading-loose tracking-wider">Platform Launch</div>
                <div className="justify-start items-center gap-[22px] flex">
                    <FormAddTask />
                    <Image src={theme === "dark"?dots_light: dots_dark} width={6} height={6} alt="kanban" className="" />

                </div>
            </div>
        </div>
    )
}



export default Navbar