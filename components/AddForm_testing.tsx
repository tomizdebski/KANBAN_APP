import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import add from "../public/icons/add_white.svg";
import close_dark from "../public/icons/close_dark.svg";
import close_light from "../public/icons/close_light.svg";
import { useTheme } from "next-themes";
import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";

const FormAddTask: React.FC = () => {
  const { theme } = useTheme();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubtasks] = useState<string[]>([""]);
  const [collapse, setCollapse] = useState<boolean>(false);

  const handleAddSubtask = (): void => {
    setSubtasks([...subtasks, ""]);
  };

  const handleSubtaskChange = (index: number, value: string): void => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Perform form validation here
    console.log("Form submitted:", { title, description, subtasks });
    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setSubtasks([""]);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
      <div className="w-[473px] h-[764px] px-7 py-[26px] bg-indigo-50 dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
        <form onSubmit={handleSubmit}>
          <div className="self-stretch p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-[129px] text-center text-gray dark:text-light_gray text-base font-semibold font-saira leading-none tracking-wide">
                Add New Task
              </div>
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
            <div className="w-[233px] h-[18px] text-gray dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Title
            </div>
            <input
              type="text"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              className="self-stretch h-10 py-2.5 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex"
              placeholder="e.g. Take coffee break"
              required
            />
          </div>
          <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[18px] flex">
            <div className="self-stretch h-[18px] text-gray dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Description
            </div>
            <textarea
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
              className="self-stretch px-2.5 py-7 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex"
              placeholder="e.g. Take coffee break"
              required
            />
          </div>
          <div className="self-stretch h-[186px] flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch h-[18px] text-gray dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Subtasks
            </div>
            {subtasks.map((subtask: string, index: number) => (
              <div key={index} className="self-stretch justify-start items-center gap-[17px] inline-flex">
                <input
                  type="text"
                  value={subtask}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleSubtaskChange(index, e.target.value)}
                  className="grow shrink basis-0 h-10 py-2.5 bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 flex"
                  placeholder="e.g. Take coffee break"
                  required
                />
                <button type="button" onClick={() => handleAddSubtask()}>{index === subtasks.length - 1 ? "+" : "-"}</button>
              </div>
            ))}
          </div>
          <button type="submit" className="self-stretch pl-4 pr-6 py-3 bg-neutral-100 rounded-[20px] shadow justify-center items-center gap-2 inline-flex">
            <div className="w-2 h-2 relative border-indigo-500" />
            <div className="text-center text-indigo-500 text-sm font-semibold font-saira leading-none tracking-wide">
              Save
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAddTask;
