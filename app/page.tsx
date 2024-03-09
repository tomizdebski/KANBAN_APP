import Column from "@/components/Column";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SwitchTheme from "@/components/SwitchTheme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <div className="flex w-[60vw] overflow-auto">
            <Column color="blue"/>
            <Column color="fiolet"/>
            <Column color="blue"/>
            <Column color="fiolet"/>
            <Column color="blue"/>
            <Column color="fiolet"/>
            <div>3</div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
