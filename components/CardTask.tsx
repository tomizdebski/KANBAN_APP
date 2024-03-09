"use client";
import React from "react";
import { useEffect, useState } from "react";

const CardTask = () => {
  const [show, setShow] = useState(false);

  if (!show) return (
    <div 
    onClick={() => setShow(true)}
    className="self-stretch h-[76px] p-3 bg-white dark:bg-dark_gray rounded flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-gray dark:text-white text-sm font-semibold font-saira leading-none tracking-wide">
          Marketing Plan
        </div>
        <div className="text-gray dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          Body Small 12px
          <br />
        </div>
      </div>
  )

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="w-[484px] h-[532px] px-7 py-[26px]   bg-light_blue dark:bg-dark_gray rounded-lg flex-col justify-start items-start gap-10 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="w-[269px] h-[57px] text-dark_gray  dark:text-light_gray text-base font-semibold font-saira leading-[18px] tracking-wide">
            Research pricing points of various competitors and trial diffrent
            bussines models
          </div>
          <div
            onClick={() => setShow(false)}
            className="text-black relative bg-white"
          >X</div>
        </div>
        <div className="self-stretch text-dark_gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          We know we’re planning to build for version one. Now we need to
          finalizse the pricing model we’ll use. Keep iterating the subtasks
          until we have a coherent proposition.
        </div>
        <div className="self-stretch h-[186px] flex-col justify-start items-start gap-4 flex">
          <div className="w-[233px] h-[18px] text-dark_gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
            Subtasks(2 of 3)
          </div>
          <div className="self-stretch h-10 p-2 bg-white rounded-lg justify-start items-center gap-6 inline-flex">
            <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
            <div className="text-dark_gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
          <div className="self-stretch h-10 p-2 bg-white rounded-lg justify-start items-center gap-6 inline-flex">
            <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
            <div className="text-dark_gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
          <div className="self-stretch h-10 p-2 bg-white rounded-lg justify-start items-center gap-6 inline-flex">
            <div className="w-4 h-4 relative bg-white" />
            <div className="text-dark_gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              We know we’re planning to build for{" "}
            </div>
          </div>
        </div>
        <div className="self-stretch h-[69px] flex-col justify-start items-start gap-[11px] flex">
          <div className="w-[233px] h-[18px] text-dark_gray  dark:text-light_gray text-xs font-bold font-saira leading-none tracking-wide">
            Status
            <br />
          </div>
          <div className="self-stretch h-10 px-2 py-2.5 bg-white rounded-lg border border-light_blue justify-between items-center inline-flex">
            <div className="text-dark_gray  dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
              Todo
            </div>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTask;
