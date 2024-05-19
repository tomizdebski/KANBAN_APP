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
import ButtonAddBoard from "./ButtonAddBoard";

interface Props {
  boards: BoardType[];
  activeBoard: BoardType | null;
  setBoards: (boards: BoardType[]) => void;
  setActiveBoard: (board: BoardType) => void;
  createNewBoard: (title: string) => void;
}

const Sidebar = ({
  boards,
  activeBoard,
  setBoards,
  setActiveBoard,
  createNewBoard,
}: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="hidden sm:flex w-[285px] h-[90vh] bg-gray-800 flex-col justify-between items-start inline-flex dark:bg-dark_gray bg-white">
      <div className="w-[227px] h-[382px] flex-col items-center gap-[37px] flex">
        <div className="self-stretch gap-2 flex-col justify-between items-start flex">
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
                  ? `self-stretch px-6 py-3 bg-indigo-500 rounded-tr-[20px] rounded-br-[20px]  justify-between items-center gap-3 inline-flex cursor-pointer hover:stroke-white hover:bg-columnBackgroundColor text-light_gray dark:text-light_gray w-full`
                  : `self-stretch px-6 py-3  rounded-tr-[20px] rounded-br-[20px]  justify-between items-center gap-3 inline-flex cursor-pointer hover:stroke-white hover:bg-columnBackgroundColor text-gray w-full`
              }
            >
              <div className="flex gap-2">
                <Image
                  src={el.id === activeBoard?.id ? kanban_white : kanban_gray}
                  width={16}
                  height={16}
                  alt="kanban"
                  className=""
                />
                <div className="flex justify-between gap-4 ">
                  <div className="text-center  text-sm font-semibold font-saira leading-none tracking-wider">
                    {el.title}
                  </div>
                </div>
              </div>

              <button
                className="stroke-gray-500  rounded "
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
          ))}

          <ButtonAddBoard createNewBoard={createNewBoard} />
        </div>
      </div>
      <div className="self-stretch h-[103px] px-6 flex-col justify-start items-start gap-[13px] flex">
        <SwitchTheme />
      </div>
    </div>
  );
};
function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default Sidebar;
