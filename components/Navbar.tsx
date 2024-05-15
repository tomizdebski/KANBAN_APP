"use client";

import Image from "next/image";
import dots_light from "../public/icons/dots_light.svg";
import dots_dark from "../public/icons/dots_dark.svg";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import { BoardType } from "@/types";

interface Props {
  activeBoard: BoardType;
}

const Navbar = ({ activeBoard }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  return (
    <div className="w-full h-[84px] py-5 px-5 bg-gray-800 flex-col items-between align-between flex">
      <div className="justify-between items-center flex">
        <Logo />
        <div className="text-dark_gray dark:text-light_gray text-2xl font-bold font-saira leading-loose tracking-wider">
          {activeBoard?.title}
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

