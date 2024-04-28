"use client";
import { useState } from "react";
import Image from "next/image";
import kanban_white from "../public/icons/kanban_white.svg";
import logo from "../public/icons/logo.svg";
import visible from "../public/icons/visible.svg";
import SwitchTheme from "./SwitchTheme";
import { BoardType } from "@/types";
import Plus from "../icons/PlusIcons";
import KanbanIcon from "@/icons/KanbanIcon";
import { Id } from "@/types";
import TrashIcon from "@/icons/TrashIcon";

interface Props {
  boards: BoardType[];
  createNewBoard: (title: string) => void;
  deleteBoard: (id: Id) => void;
  updateBoard: (id: Id, title: string) => void;
}

const Sidebar = (props: Props) => {
  const [activeBoard, setActiveBoard] = useState<Id>(0);
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { boards, createNewBoard, deleteBoard, updateBoard } = props;

  return (
    <div className="w-[285px] h-[100vh] bg-gray-800 flex-col justify-between items-start inline-flex">
      <div className="w-[227px] h-[382px] flex-col justify-center items-center gap-[37px] flex">
        <div className="self-stretch h-16 px-6 justify-start items-center gap-4 inline-flex">
          <Image src={logo} width={36} height={36} alt="kanban" className="" />
          <div className="text-deep_gray dark:text-white text-large font-bold font-saira leading-9 tracking-wider">
            kanban
          </div>
        </div>
        <div className="self-stretch h-[273px] flex-col justify-between items-start flex">
          <div className="self-stretch px-6 justify-between items-start inline-flex">
            <div className="grow shrink basis-0 text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-tight tracking-wider">
              {`ALL BOARDS (${props.boards?.length})`}
            </div>
          </div>

          {boards.map((el) => (
            <div
              key={el.id}
              onClick={() => setActiveBoard(el.id)}
              className={
                el.id === activeBoard
                  ? `text-dark_gray dark:text-zinc-200 self-stretch px-6 py-3 bg-indigo-500 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer hover:opacity-50`
                  : "text-dark_gray dark:text-zinc-200 self-stretch px-6 py-3  rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex cursor-pointer hover:opacity-50"
              }
            >
              <KanbanIcon />
              <div className="text-center dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
                {el.title}
              </div>
              <button
                className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded  "
                onClick={() => deleteBoard(el.id)}
              >
                <TrashIcon />
              </button>
            </div>
          ))}

          {/* <div className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex">
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
          </div> */}
          <button
            onClick={() => {
              setEditMode(true);
              setInputValue("");
            }}
            className="self-stretch px-6 py-3 rounded-tr-[20px] rounded-br-[20px]  justify-start items-center gap-2 inline-flex text-fiolet hover:text-zinc-200 cursor-pointer"
          >
            {!editMode ? (
              <div className="justify-center items-center gap-1 flex">
                <KanbanIcon />
                <Plus />

                <div className="text-center text-sm font-semibold font-saira leading-none tracking-wider">
                  Create New Board
                </div>
              </div>
            ) : (
              <input
                className="bg-black focus:border-fiolet w-[150px] border rounded px-2 outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                onBlur={() => setEditMode(false)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(false);
                  createNewBoard(inputValue);
                }}
              />
            )}
          </button>
        </div>
      </div>
      <div className="self-stretch h-[103px] px-6 flex-col justify-start items-start gap-[13px] flex">
        <SwitchTheme />
        <div className="self-stretch py-3 rounded-tr-[20px] rounded-br-[20px] justify-start items-center gap-2 inline-flex">
          <Image
            src={visible}
            width={16}
            height={16}
            alt="kanban"
            className=""
          />
          <div className="text-center text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
            Hide Sidebar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
