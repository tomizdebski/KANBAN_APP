"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Board from "@/components/Board";
import { useState } from "react";
import { BoardType, Id } from "@/types";

export default function Home() {
  const [boards, setBoards] = useState<BoardType[]>([
    {
      id: "1",
      title: "Platform Lunch",
      columns: [],
    },
    {
      id: "2",
      title: "Marketing Plan",
      columns: [],
    },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex">
        <Sidebar boards={boards} createNewBoard={createNewBoard} deleteBoard={deleteBoard} updateBoard={updateBoard}/>
        <div className="flex flex-col">
          <Navbar />
          <div
            className="overflow-x-hidden overflow-y-hidden"
          >
            <Board />
          </div>
        </div>
      </div>
    </main>
  );

  function createNewBoard(title: string) {
    const boardToAdd: BoardType = {
      id: generateId(),
      title,
      columns: [],
    };
    setBoards([...boards, boardToAdd]);
  };
  function deleteBoard(id: Id) {
    const newBoards = boards.filter((board) => board.id !== id);
    setBoards(newBoards);
  };
  function updateBoard(id: Id, title: string) {
    const newBoards = boards.map((board) => {
      if (board.id === id) {
        return { ...board, title };
      }
      return board;
    });
    setBoards(newBoards);
  }
  ;
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }
}
