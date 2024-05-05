import Image from "next/image";
import visible from "../public/icons/visible.svg";

interface Props {
  setHideSidebar: (value: boolean) => void;
  hideSidebar: boolean;
}

const Hide_button = ({setHideSidebar, hideSidebar} : Props) => {
    
  return (
    <button 
    onClick={() => setHideSidebar(!hideSidebar)} 
    className="self-stretch py-3 rounded-tr-[20px] rounded-br-[20px] justify-start items-center gap-2 inline-flex absolute bottom-0 cursor-pointer">
      <Image src={visible} width={16} height={16} alt="kanban" className="" />
      <div className="text-center text-[#656567] dark:text-zinc-200 text-sm font-semibold font-saira leading-none tracking-wider">
        {hideSidebar ? "Hide Sidebar" : "Show Sidebar"}
      </div>
    </button>
  );
};

export default Hide_button;
