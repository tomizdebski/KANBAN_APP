import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SwitchTheme from "@/components/SwitchTheme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <Sidebar />
        <div className="">
          <Navbar />
        </div>
        
      </div>
    </main>
  );
}
