"use client";
import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import add from "../public/icons/add_white.svg";

import { useTheme } from "next-themes";
import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";
import { Id, Task } from "@/types";
import close_dark from "../public/icons/close_dark.svg";
import close_light from "../public/icons/close_light.svg";

interface Props {
  createTask: (task: Task) => void;
  columnId: Id;
}

const FormAddTask = ({ createTask, columnId }: Props) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [collapse, setCollapse] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleAddSubtask = (): void => {
    setSubtasks([...subtasks, ""]);
  };

  const handleDeleteSubtask = (index: number): void => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleSubtaskChange = (index: number, value: string): void => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Perform form validation here
    console.log("Form submitted:", { title, content, subtasks });
    // Reset form fields after submission
    setTitle("");
    setContent("");
    setSubtasks([""]);
    createTask({
      id: Date.now(),
      columnId,
      title,
      content,
      subtasks,
      status: "todo",
    });
    setVisibleForm(!visibleForm);
  };

  if (!visibleForm)
    return (
      <button
        onClick={() => setVisibleForm(!visibleForm)}
        className=" pl-4 pr-4 py-4  rounded-xl shadow bg-white dark:bg-dark_gray justify-center items-center gap-2 flex hover:opacity-50 hover:ring-2 hover:ring-inset hover:ring-fiolet"
      >
        <Image src={add} width={12} height={12} alt="add" className="" />
        <div className="text-center text-gray dark:text-light_gray text-sm font-bold font-saira leading-none tracking-wide">
          Add New Task
        </div>
      </button>
    );

  if (visibleForm)
    return (
      <form
        onSubmit={handleSubmit}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50"
      >
        <div className="w-[473px]  px-7 py-[26px] bg-white dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch py-2.5 justify-start items-center gap-2.5 inline-flex ">
            <div className="justify-between items-center flex w-full">
              <div className="text-center text-gray  dark:text-light_gray text-base font-semibold font-saira leading-none tracking-wide">
                Add New Task
              </div>
              <Image
                src={close_light}
                width={16}
                height={16}
                alt="close"
                className="cursor-pointer"
                onClick={() => setVisibleForm(!visibleForm)}
              />
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
            <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Title
            </div>

            <input
              type="text"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="text-center self-stretch h-10 py-2.5 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex"
              placeholder="e.g. Take coffee break"
              required
            />
          </div>
          <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[18px] flex">
            <div className="text-center self-stretch h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Description
            </div>
            <textarea
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              className="text-center self-stretch px-2.5 py-7 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex"
              placeholder="e.g. Take coffee break"
              required
            />
          </div>
          <div className="self-stretch  flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Subtasks
            </div>

            {subtasks.map((subtask: string, index: number) => (
              <div
                key={index}
                className="self-stretch justify-start items-center gap-[17px] inline-flex"
              >
                <input
                  type="text"
                  value={subtask}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSubtaskChange(index, e.target.value)
                  }
                  className="text-center grow shrink basis-0 h-10 py-2.5 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 flex"
                  placeholder="e.g. Take coffee break"
                  required
                />

                <Image
                  src={close_light}
                  width={16}
                  height={16}
                  alt="close"
                  className="cursor-pointer"
                  onClick={() => handleDeleteSubtask(index)}
                />
              </div>
            ))}

            <button
              onClick={() => handleAddSubtask()}
              className="self-stretch pl-4 pr-6 py-3 bg-neutral-100 rounded-[20px] shadow justify-center items-center gap-2 inline-flex hover:opacity-50 hover:ring-2 hover:ring-inset hover:ring-fiolet cursor-pointer"
            >
              <div className="w-2 h-2 relative border-indigo-500" />
              <div className="text-center text-indigo-500 text-sm font-semibold font-saira leading-none tracking-wide ">
                Add Subtask
              </div>
            </button>
          </div>
          {/* <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
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
          </div> */}
          <button
            type="submit"
            className="self-stretch px-6 py-3 bg-indigo-500 rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex hover:opacity-50 hover:ring-2 hover:ring-inset hover:ring-fiolet"
          >
            <div className="w-[58px] text-center text-white text-sm font-medium font-saira leading-none tracking-wide ">
              Save
            </div>
          </button>
        </div>
      </form>
    );
};

export default FormAddTask;
