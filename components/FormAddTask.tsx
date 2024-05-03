"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import add from "../public/icons/add_white.svg";
import close_dark from "../public/icons/close_dark.svg";
import close_light from "../public/icons/close_light.svg";
import { useTheme } from "next-themes";
import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";

const FormAddTask = () => {

  const [visibleForm, setVisibleForm] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [collapse, setCollapse] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubtasks] = useState<string[]>([""]);

  if (!visibleForm)
    return (
      <button
        onClick={() => setVisibleForm(!visibleForm)}
        className="pl-4 pr-6 py-3 bg-indigo-500 rounded-[20px] shadow justify-center items-center gap-2 flex"
      >
        <Image src={add} width={12} height={12} alt="add" className="" />
        <div className="text-center text-light_gray text-sm font-bold font-saira leading-none tracking-wide">
          Add New Task
        </div>
      </button>
    );

  if (visibleForm)
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50">
        <div className="w-[473px] h-[764px] px-7 py-[26px] bg-indigo-50 dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch p-2.5 justify-start items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-[129px] text-center text-gray  dark:text-light_gray text-base font-semibold font-saira leading-none tracking-wide">
                Add New Task
              </div>
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
            <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Title
            </div>
            <div className="self-stretch h-10 py-2.5  bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex">
              <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                e. g. Take coffe break
              </div>
            </div>
          </div>
          <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[18px] flex">
            <div className="self-stretch h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Dsescription
            </div>
            <div className="self-stretch px-2.5 py-7  bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 inline-flex">
              <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                e. g. Take coffe break
              </div>
            </div>
          </div>
          <div className="self-stretch h-[186px] flex-col justify-start items-end gap-4 flex">
            <div className="self-stretch h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
              Subtasks
            </div>
            <div className="self-stretch justify-start items-center gap-[17px] inline-flex">
              <div className="grow shrink basis-0 h-10 py-2.5  bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 flex">
                <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                  e. g. Take coffe break
                </div>
              </div>
              <Image
                src={theme === "dark" ? close_light : close_dark}
                width={24}
                height={24}
                alt="close"
                className=""
              />
            </div>
            <div className="self-stretch justify-start items-center gap-[17px] inline-flex">
              <div className="grow shrink basis-0 h-10 py-2.5  bg-white dark:bg-deep_gray rounded-lg border border-zinc-200 justify-center items-center gap-2.5 flex">
                <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                  e. g. Take coffe break
                </div>
              </div>
              <Image
                src={theme === "dark" ? close_light : close_dark}
                width={24}
                height={24}
                alt="close"
                className=""
              />
            </div>
            <div className="self-stretch pl-4 pr-6 py-3 bg-neutral-100 rounded-[20px] shadow justify-center items-center gap-2 inline-flex">
              <div className="w-2 h-2 relative border-indigo-500" />
              <div className="text-center text-indigo-500 text-sm font-semibold font-saira leading-none tracking-wide">
                Button
              </div>
            </div>
          </div>
          <div className="self-stretch h-[74px] flex-col justify-start items-start gap-4 flex">
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
          <div
            onClick={() => setVisibleForm(!visibleForm)}
            className="self-stretch px-6 py-3 bg-indigo-500 rounded-[20px] shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="w-[58px] text-center text-white text-sm font-medium font-saira leading-none tracking-wide">
              Save
            </div>
          </div>
        </div>
      </div>
    );
};

export default FormAddTask;
