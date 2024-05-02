'use client';
import React from "react";
import Image from "next/image";
import kanban_gray from "../public/icons/kanban_gray.svg";
import kanban_white from "../public/icons/kanban_white.svg";
import add from "../public/icons/add_fiolet.svg";
import visible from "../public/icons/visible.svg";
import SwitchTheme from "./SwitchTheme";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const Sidebar = () => {

    const { systemTheme, theme, setTheme } = useTheme();



  return (
    <div className="w-[285px] h-[90vh] bg-gray-800 flex-col justify-between items-start inline-flex dark:bg-dark_gray bg-white">
      <div className="w-[227px] h-[382px] flex-col justify-center items-center gap-[37px] flex">
        
        <div className="self-stretch h-[273px] flex-col justify-between items-start flex">
          <div className="self-stretch px-6 justify-between items-start inline-flex">
            <div className="grow shrink basis-0 text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-tight tracking-wider">
              ALL BOARDS (counter)
            </div>
          </div>
          <div className="self-stretch px-6 py-3 bg-indigo-500 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex">
          <Image src={kanban_white} width={16} height={16} alt="kanban" className="" />
            <div className="text-center text-light_gray dark:text-zinc-200text-sm font-semibold font-saira leading-none tracking-wider">
              Platform Launch
            </div>
          </div>
          <div className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex">
          <Image src={theme === "dark"?kanban_white: kanban_gray} width={16} height={16} alt="kanban" className="" />
            <div className="text-center text-[#656567] dark:text-zinc-200 text-body-large font-semibold font-saira leading-none tracking-wider">
              Marketing Plan
            </div>
          </div>
          <div className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex">
          <Image src={theme === "dark"?kanban_white: kanban_gray} width={16} height={16} alt="kanban" className="" />
            <div className="text-center text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
              Marketing Plan
            </div>
          </div>
          <div className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex">
            <div className="justify-center items-center gap-1 flex">
              
              <Image src={theme === "dark"?kanban_white: kanban_gray} width={16} height={16} alt="kanban" className="" />
              <Image src={add} width={12} height={12} alt="add" className="" />
              
              <div className="text-center text-indigo-500 text-sm font-semibold font-saira leading-none tracking-wider">
                Create New Board
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[103px] px-6 flex-col justify-start items-start gap-[13px] flex">
        <SwitchTheme />
        
      </div>
    </div>
  );
};

export default Sidebar;
