"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import light_mode from "../public/icons/light_mode.svg";
import dark_mode from "../public/icons/dark_mode.svg";
import dark_mode_gray from "../public/icons/dark_mode_gray.svg";
import light_mode_gray from "../public/icons/light_mode_gray.svg";

const SwitchTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    
    <div className="w-[237px] h-12 px-12 py-3 bg-indigo-50 dark:bg-zinc-800 rounded justify-between items-center inline-flex">
      <Image src={theme === "dark"?light_mode: light_mode_gray} width={24} height={24} alt="light" className="" />
      <div className="w-[48px] h-[24px] bg-fiolet rounded-full flex items-center">
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`w-4 h-4 rounded-full bg-white shadow-md transform duration-300 ease-in-out ${
            theme === "dark"
              ? "translate-x-7"
              : theme === "light"
              ? "translate-x-1"
              : ""
          }`}
        />
      </div>

      <Image src={theme === "dark"?dark_mode: dark_mode_gray} width={24} height={24} alt="dark" className="" />
    </div>
  );
};

export default SwitchTheme;
