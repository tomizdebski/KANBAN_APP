"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import checked from "../public/icons/checked.svg";
import no_checked from "../public/icons/no_checked.svg";
import collapse_dark from "../public/icons/collapse_dark.svg";
import collapse_light from "../public/icons/collapse_light.svg";
import close_dark from "../public/icons/close_dark.svg";
import close_light from "../public/icons/close_light.svg";

const CardTask = () => {
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  if (!show)
    return (
      <div
        onClick={() => setShow(true)}
        className="self-stretch h-[76px] p-3 bg-white dark:bg-dark_gray rounded flex-col justify-start items-start gap-1 flex"
      >
        <div className="text-center text-gray dark:text-white text-sm font-semibold font-saira leading-none tracking-wide">
          Marketing Plan
        </div>
        <div className="text-gray dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          Body Small 12px
          <br />
        </div>
      </div>
    );

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-[484px] h-[532px] px-7 py-[26px]   bg-light_blue dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="w-[269px] h-[57px] text-gray  dark:text-light_gray text-base font-semibold font-saira leading-[18px] tracking-wide">
            Research pricing points of various competitors and trial diffrent
            bussines models
          </div>
          <Image
              src={theme === "dark" ? close_light : close_dark}
              width={16}
              height={16}
              alt="close"
              className="self-start"
              onClick={() => setShow(false)}
            />
        </div>
        <div className="self-stretch text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          We know we’re planning to build for version one. Now we need to
          finalizse the pricing model we’ll use. Keep iterating the subtasks
          until we have a coherent proposition.
        </div>
        <div className="self-stretch h-[186px] flex-col justify-start items-start gap-4 flex">
          <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
            Subtasks(2 of 3)
          </div>
          <div className="self-stretch h-10 p-2 bg-white dark:bg-deep_gray   rounded-lg justify-start items-center gap-6 inline-flex">
            <Image
              src={checked}
              width={16}
              height={16}
              alt="kanban"
              className=""
            />
            <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
          <div className="self-stretch h-10 p-2 bg-white dark:bg-deep_gray rounded-lg justify-start items-center gap-6 inline-flex">
            <Image
              src={checked}
              width={16}
              height={16}
              alt="checked"
              className=""
            />
            <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
          <div className="self-stretch h-10 p-2 bg-white dark:bg-deep_gray   rounded-lg justify-start items-center gap-6 inline-flex">
            <Image
              src={no_checked}
              width={16}
              height={16}
              alt="checked"
              className=""
            />
            <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
        </div>
        <div className="self-stretch h-[69px] flex-col justify-start items-start gap-[11px] flex">
          <div className="w-[233px] h-[18px] text-gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
            Status
            <br />
          </div>
          <div className="self-stretch h-auto px-2 py-2.5 bg-white dark:bg-deep_gray  rounded-lg border border-light_blue justify-between items-center inline-flex">
            <div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              Todo

              {collapse && (<div className="text-gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
                Due date: 12/12/2021
                <br />
                Created by: John Doe
              </div>)}
            </div>
            <Image
              src={theme === "dark" ? collapse_light : collapse_dark}
              width={16}
              height={16}
              alt="collapse"
              className="self-start"
              onClick={() => setCollapse(!collapse)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
