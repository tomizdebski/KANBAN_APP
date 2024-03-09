'use client'
import React from "react";
import add_white from "../public/icons/add_white.svg";
import add_gray from "../public/icons/add_gray.svg";
import Image from "next/image";
import { useTheme } from "next-themes";

const ButtonAddColumn = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    
  return (
    <div className="w-[200px] h-[936px] pl-3 py-2.5 bg-light_blue dark:bg-deep_gray justify-end items-center gap-2.5 inline-flex">
      <button className=" h-[830px] w-[100px] py-3    rounded-lg  justify-center items-center gap-2 flex hover:opacity-50">
        <Image src={theme === "dark"?add_white:add_gray} width={12} height={12} alt="kanban" className="" />
        <div className="text-center text-gray dark:text-light_gray text-sm font-semibold font-saira leading-none tracking-wide ">
          New Column
          
        </div>
      </button>
    </div>
  );
};

export default ButtonAddColumn;
