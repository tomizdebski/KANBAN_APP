"use client";
import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { useTheme } from "next-themes";

import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";
import close_dark from "../public/icons/close_dark.svg";
import close_light from "../public/icons/close_light.svg";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [editTitle, setEditTitle] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-gray-900 p-2 h-[100px] items-center flex text-left rounded-xl border-2 border-fiolet cursor-grab justify-between opacity-30"
      ></div>
    );
  }

  if (editMode) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
        <div className="w-[484px]  px-7 py-[26px]   bg-light_blue dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            {!editTitle && <div className="w-[269px]  text-gray  dark:text-light_gray text-base font-semibold font-saira leading-[18px] tracking-wide">
              {task.title}
            </div>}
            <Image
              src={theme === "dark" ? close_light : close_dark}
              width={16}
              height={16}
              alt="close"
              className="self-start"
              onClick={() => setEditMode(false)}
            />
          </div>
          <div className="self-stretch text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
            {task.content}
          </div>
          <div className="self-stretch  flex-col justify-start items-start gap-4 flex">
            <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Subtasks({task.subtasks.length})
            </div>

            {task.subtasks.map((el) => (
              <div key={el} className="self-stretch h-10 p-2 bg-white dark:bg-deep_gray   rounded-lg justify-start items-center gap-6 inline-flex">
                <input type="checkbox" />
                <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                  {el}
                </div>
              </div>
            ))}
          </div>
          <div className="self-stretch h-[69px] flex-col justify-start items-start gap-[11px] flex">
            <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Status
              <br />
            </div>
            <div className="self-stretch h-auto px-2 py-2.5 bg-white dark:bg-deep_gray  rounded-lg border border-light_blue justify-between items-center inline-flex">
              <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                Todo
                {collapse && (
                  <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                    Doing
                    <br />
                    Done
                  </div>
                )}
              </div>
              <Image
                src={theme === "dark" ? collapse_light : collapse_dark}
                width={16}
                height={16}
                alt="collapse"
                className={!collapse ? "self-start" : "rotate-180 self-start"}
                onClick={() => setCollapse(!collapse)}
              />
            </div>
          </div>
        </div>
      </div>
      /////////////////////////////inna wersja
      // <div
      //   ref={setNodeRef}
      //   style={style}
      //   {...attributes}
      //   {...listeners}
      //   className="bg-white dark:bg-dark_gray p-2 h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-fiolet cursor-grab justify-between opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
      // >
      //   <textarea
      //     className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none"
      //     value={task.content}
      //     autoFocus
      //     placeholder="Enter task content"
      //     onBlur={toggleEditMode}
      //     onKeyDown={(e) => {
      //       if (e.key === "Enter" && e.shiftKey) toggleEditMode();
      //     }}
      //     onChange={(e) => updateTask(task.id, e.target.value)}
      //   />
      // </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className=" 
      p-4 h-auto 
      items-center 
      flex 
      text-left 
      rounded-xl 
      hover:ring-2 
      hover:ring-inset 
      hover:ring-fiolet 
      cursor-grab 
      justify-between 
      opacity-60 
      hover:opacity-100 
      transition-opacity 
      duration-300 
      ease-in-out 
      dark:bg-dark_gray 
      bg-white
      shadow"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <div className="flex flex-col">
        <div className="text-fiolet font-saira">{task.title}</div>
        <div className="font-small my-auto h-[90%] w-full  whitespace-pre-wrap ">
          {task.content}
        </div>
        <div className="font-saira font-small my-auto h-[90%] w-full  whitespace-pre-wrap ">
          Subtasks ({task.subtasks.length})
        </div>
      </div>
      {mouseIsOver && (
        <button className="stroke-white" onClick={() => deleteTask(task.id)}>
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
