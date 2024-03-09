import React from "react";

const Column = ({color}:{color:String}) => {
  return (
    <div className="min-w-[250px] h-auto pl-4 py-4 bg-light_blue dark:bg-deep_gray flex-col justify-start items-start gap-[18px] inline-flex">
      <div className="self-stretch justify-start items-center gap-3 inline-flex">
        <div className={`w-3.5 h-3.5 bg-${color} rounded-full`} />
        <div className="text-gray dark:text-light_gray text-sm font-semibold font-saira leading-tight tracking-tight">
          TODO (4)
        </div>
      </div>
      <div className="self-stretch h-[76px] p-3 bg-white dark:bg-dark_gray rounded flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-gray dark:text-white datext-sm font-semibold font-saira leading-none tracking-wide">
          Marketing Plan
        </div>
        <div className="text-gray dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          Body Small 12px
          <br />
        </div>
      </div>

      <div className="self-stretch h-[76px] p-3 bg-white dark:bg-dark_gray rounded flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-gray dark:text-white text-sm font-semibold font-saira leading-none tracking-wide">
          Marketing Plan
        </div>
        <div className="text-gray dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          Body Small 12px
          <br />
        </div>
      </div>

      <div className="self-stretch h-[76px] p-3 bg-white dark:bg-dark_gray rounded flex-col justify-start items-start gap-1 flex">
        <div className="text-center text-gray dark:text-white text-sm font-semibold font-saira leading-none tracking-wide">
          Marketing Plan
        </div>
        <div className="text-gray dark:text-light_gray text-xs font-normal font-saira leading-none tracking-wide">
          Body Small 12px
          <br />
        </div>
      </div>
    </div>
  );
};

export default Column;
