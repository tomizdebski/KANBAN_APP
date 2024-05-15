"use client";
import React, { useState } from "react";
import Image from "next/image";
import kanban_gray from "../public/icons/kanban_gray.svg";
import kanban_white from "../public/icons/kanban_white.svg";

import add from "../public/icons/add_fiolet.svg";
import SwitchTheme from "./SwitchTheme";
import { useTheme } from "next-themes";
import { BoardType } from "@/types";
import TrashIcon from "@/icons/TrashIcon";

interface Props {
  boards: BoardType[];
  activeBoard: BoardType | null;
  setBoards: (boards: BoardType[]) => void;
  setActiveBoard: (board: BoardType) => void;
}

const Sidebar = ({ boards, activeBoard, setBoards, setActiveBoard }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-[285px] h-[90vh] bg-gray-800 flex-col justify-between items-start inline-flex dark:bg-dark_gray bg-white">
      <div className="w-[227px] h-[382px] flex-col justify-center items-center gap-[37px] flex">
        <div className="self-stretch h-[273px] flex-col justify-between items-start flex">
          <div className="self-stretch px-6 justify-between items-start inline-flex">
            <div className="grow  basis-0 text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-tight tracking-wider">
              ALL BOARDS ({boards.length})
            </div>
          </div>

          {boards.map((el) => (
            <div
              onClick={() => setActiveBoard(el)}
              key={el.id}
              className={
                el.id === activeBoard?.id
                  ? `self-stretch px-6 py-3 bg-indigo-500 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer`
                  : `self-stretch px-6 py-3  rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer`
              }
            >
              <Image
                src={kanban_white}
                width={16}
                height={16}
                alt="kanban"
                className=""
              />
              <div className="flex justify-between">
              <div className="text-center text-light_gray dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
                {el.title}
              </div>

              <button
                className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded "
                onClick={() => {
                  const newBoards = boards.filter(
                    (board) => board.id !== el.id
                  );
                  setBoards(newBoards);
                }}
              >
                <TrashIcon />
              </button>
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setEditMode(true);
              setInputValue("");
            }}
            className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer"
          >
            {!editMode ? (
              <div className="justify-center items-center gap-1 flex">
                <Image
                  src={theme === "dark" ? kanban_white : kanban_gray}
                  width={16}
                  height={16}
                  alt="kanban"
                  className=""
                />
                <Image
                  src={add}
                  width={12}
                  height={12}
                  alt="add"
                  className=""
                />

                <div className="text-center text-indigo-500 text-sm font-semibold font-saira leading-none tracking-wider">
                  Create New Board
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
        </div>
      </div>
      <div className="self-stretch h-[103px] px-6 flex-col justify-start items-start gap-[13px] flex">
        <SwitchTheme />
      </div>
    </div>
  );
  function createNewBoard(title: string) {
    if (!title) return;
    const newBoard: BoardType = {
      id: generateId(),
      title,
      columns: [],
      tasks: [],
    };

    const newBoards = [...boards, newBoard];
    console.log(newBoards);
    setBoards(newBoards);
  }
};
function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default Sidebar;

