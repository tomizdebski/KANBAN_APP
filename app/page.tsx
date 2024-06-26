'use client';
import Board from "@/components/Board";
import { BoardType } from "@/types";
import { useState, useEffect } from "react";

const initialBoards = [{
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
  tasks: [],
}];

export default function Home() {
  
  const [boards, setBoards] = useState<BoardType[]>(() => {
    const storedBoards = typeof window !== 'undefined' && localStorage.getItem("boards");
    if (storedBoards) {
      return JSON.parse(storedBoards);
    } else if (typeof window !== 'undefined'){
      localStorage.setItem("boards", JSON.stringify(initialBoards));
       return initialBoards;
    }
  });
 
  const [activeBoard, setActiveBoard] = useState<BoardType | null >(null);

  useEffect(() => {
    if (boards.length > 0) {
      setActiveBoard(boards[0]);
    }
  }, []);




  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("boards", JSON.stringify(boards));
    }
  }, [boards]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">

        <div className="flex ">

          {activeBoard && <Board boards={boards} setBoards={setBoards} activeBoard={activeBoard} setActiveBoard={setActiveBoard}/>}

        </div>
      </div>
    </main>
  );

}
