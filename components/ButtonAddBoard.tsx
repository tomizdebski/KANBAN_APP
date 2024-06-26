"use client";
import Image from "next/image";
import { useState } from "react";
import add_white from "../public/icons/add_white.svg";
import add_gray from "../public/icons/add_gray.svg";
import kanban_gray from "../public/icons/kanban_gray.svg";
import kanban_white from "../public/icons/kanban_white.svg";
import { useTheme } from "next-themes";

interface Props {
  createNewBoard: (title: string) => void;
}

const ButtonAddBoard = ({ createNewBoard }: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { theme } = useTheme();

  return (
    <button
      onClick={() => {
        setEditMode(true);
        setInputValue("");
      }}
      className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer"
    >
      {!editMode ? (
        <div className="justify-center items-center gap-1 flex cursor-pointer hover:opacity-50">
          <Image
            src={theme === "dark" ? add_white : add_gray}
            width={12}
            height={12}
            alt="add"
            className=""
          />

          <div className="text-center text-sm font-semibold font-saira leading-none tracking-wider text-gray dark:text-light_gray">
            New Board
          </div>
        </div>
      ) : (
        <input
          className="bg-black focus:border-fiolet w-[150px] border rounded px-2 outline-none capitalize"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
          onBlur={() => setEditMode(false)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            createNewBoard(inputValue);
            setEditMode(false);
          }}
        />
      )}
    </button>
  );
};

export default ButtonAddBoard;
