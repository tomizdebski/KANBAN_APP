"use client";

import Image from "next/image";
import dots_light from "../public/icons/dots_light.svg";
import dots_dark from "../public/icons/dots_dark.svg";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import { BoardType } from "@/types";
import { useState } from "react";
import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";

interface Props {
  boards: BoardType[];
  activeBoard: BoardType | null;
  setBoards: (boards: BoardType[]) => void;
  setActiveBoard: (board: BoardType) => void;
}

const Navbar = ({ boards, activeBoard, setBoards, setActiveBoard }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="w-full h-[84px] py-5  bg-gray-800 flex-col items-between align-between flex">
      <div className="justify-between items-center flex">
        <Logo />

        <div className="hidden sm:flex text-dark_gray dark:text-light_gray text-2xl font-bold font-saira leading-loose tracking-wider p-1">
          {activeBoard?.title}
        </div>

        <div className="flex sm:hidden align-center text-dark_gray dark:text-light_gray text-2xl font-bold font-saira leading-loose tracking-wider">
          {collapse ? (
            <div className="flex flex-col text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              {boards.map((el) => (
                <div
                  onClick={() => {
                    setActiveBoard(el);
                    setCollapse(false);
                  }}
                  key={el.id}
                  className="cursor-pointer hover:opacity-50 hover:ring-2 hover:ring-inset hover:ring-fiolet p-1"
                >
                  <div className="flex justify-between gap-4 ">
                    <div className="text-center text-gray dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
                      {el.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>{activeBoard?.title}</div>
          )}
          <Image
            src={theme === "dark" ? collapse_light : collapse_dark}
            width={20}
            height={20}
            alt="collapse"
            className={!collapse ? "self-center" : "rotate-180 self-center"}
            onClick={() => setCollapse(!collapse)}
          />
        </div>

        <div className="justify-start items-center gap-[22px] flex">
          <Image
            src={theme === "dark" ? dots_light : dots_dark}
            alt="kanban"
            className="height-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
