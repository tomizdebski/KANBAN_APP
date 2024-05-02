
'use client';
import Board from "@/components/Board";
import { BoardType } from "@/types";
import { useState, useEffect } from "react";

export default function Home() {
  const [boards, setBoards] = useState<BoardType[]>(() => {
    // Sprawdzanie czy dane istnieją w local storage, jeśli nie, zwraca domyślne dane
    const storedBoards = localStorage.getItem("boards");
    return storedBoards ? JSON.parse(storedBoards) : [{
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
  });

  const [activeBoard, setActiveBoard] = useState<BoardType>(boards[0]);

  useEffect(() => {
    // Zapisywanie danych do local storage przy odmontowywaniu komponentu
    return () => {
      localStorage.setItem("boards", JSON.stringify(boards));
    };
  }, [boards]);


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
