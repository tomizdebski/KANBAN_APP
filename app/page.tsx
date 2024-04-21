
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import Board from "@/components/Board";


export default function Home() {

  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar />
          <div className="overflow-x-hidden
        overflow-y-hidden">
             <Board />
          </div>
         
        </div>
        
      </div>
    </main>
  );
}
