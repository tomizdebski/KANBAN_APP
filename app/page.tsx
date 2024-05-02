'use client';
import Board from "@/components/Board";
import { BoardType } from "@/types";
import { useState, useEffect } from "react";



export default function Home() {

  useEffect(() => {
    
  }, []);
  

  const [boards, setBoards] = useState<BoardType[]>([{
    id: "1",
    title: "My Board",
    columns: [
      {
        id: "1",
        title: "To Do",
      },
      {
        id: "2",
        title: "In Progress",
      },
      {
        id: "3",
        title: "Done",
      },
    ],
    tasks: [
      {
        id: "11",
        columnId: "1",
        content: "Task 1",
      },
      {
        id: "22",
        columnId: "1",
        content: "Task 2",
      },
      {
        id: "33",
        columnId: "2",
        content: "Task 3",
      },
      {
        id: "44",
        columnId: "3",
        content: "Task 4",
      },
    ],
  }]);
  
  const [activeBoard, setActiveBoard] = useState<BoardType>(boards[0]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <div className="flex ">
          <Board boards={boards} setBoards={setBoards} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>
        </div>
      </div>
    </main>
  );
}
