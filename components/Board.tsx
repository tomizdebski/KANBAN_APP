"use client";
import PlusIcon from "../icons/PlusIcon";
import { use, useEffect, useMemo, useState } from "react";
import { BoardType, Column, Id, Task } from "../types";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "./TaskCard";

import Sidebar from "./Sidebar";
import HideButton from "./HideButton";
import Navbar from "./Navbar";

interface Props {
  boards: BoardType[];
  activeBoard: BoardType;
  setBoards: (boards: BoardType[]) => void;
  setActiveBoard: (board: BoardType) => void;
}

const KanabnBoard = ({
  boards,
  activeBoard,
  setBoards,
  setActiveBoard,
}: Props) => {


  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns?.map((col) => col.id), [columns]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [hideSidebar, setHideSidebar] = useState(true);

  useEffect(() => {
    setColumns(activeBoard.columns);
    setTasks(activeBoard.tasks);
  }, [activeBoard]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  useEffect(() => {
    setColumns([...board.columns]);
    setTasks([...board.tasks]);
    return () => {
      updateBoards({
        ...board,
        columns,
        tasks,
      });
    }
    
  }, [board]);

  return (
    <div className="flex flex-col">
      <Navbar activeBoard={activeBoard} />
      <div
        className="
        flex
        min-h-screen
        w-full
        overflow-x-hidden
        overflow-y-hidden
        text-dark_gray dark:text-white
        bg-light_blue dark:bg-deep_gray
        "
      >
        {hideSidebar && (
          <Sidebar
            boards={boards}
            activeBoard={activeBoard}
            setBoards={setBoards}
            setActiveBoard={setActiveBoard}
          />
        )}
        <DndContext
          sensors={sensors}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
        >
          <div className=" flex gap-4 w-[60vw] overflow-auto">
            <div className="flex gap-4 ">
              <SortableContext items={columnsId}>
                {columns.map((column) => (
                  <ColumnContainer
                    key={column.id}
                    column={column}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                    createTask={createTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    tasks={tasks.filter((task) => task.columnId === column.id)}
                  />
                ))}
              </SortableContext>
            </div>
            <button
              onClick={() => createNewColumn()}
              className="
            h-[80%]
            w-[220px] 
            min-w-[200px] 
            cursor-pointer 
            
            bg-light_blue dark:bg-deep_gray
            
            p-4 
            
            hover:text-fiolet
            flex
            gap-2
            items-center"

            >
              <PlusIcon />
              Add Column
            </button>
          </div>

          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <ColumnContainer
                  column={activeColumn}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter(
                    (task) => task.columnId === activeColumn.id
                  )}
                />
              )}
              {activeTask && (
                <TaskCard
                  task={activeTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
        <HideButton setHideSidebar={setHideSidebar} hideSidebar={hideSidebar} />
      </div>

    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
    console.log("boards", boards, "activeBoard", activeBoard);
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            columns: [...board.columns, columnToAdd],
          };
        }
        return board;
      })
    );

    
  };

  function deleteColumn(id: Id) {
    const delColumns = columns.filter((column) => column.id !== id);
    setColumns(delColumns);
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            columns: delColumns,
          };
        }
        return board;
      })
    );

    console.log("Column deleted", id);
  };

  function updateColumn(id: Id, title: string) {
    setColumns((columns) =>
      columns.map((column) => {
        if (column.id === id) {
          return {
            ...column,
            title,
          };
        }
        return column;
      })
    );
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            columns: columns.map((column) => {
              if (column.id === id) {
                return {
                  ...column,
                  title,
                };
              }
              return column;
            }),
          };
        }
        return board;
      })
    );
  }

  function createTask(columnId: Id, title: string, content: string, status: "todo" | "doing" | "done", subtasks: Subtask[]) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      title,
      content,
      status,
      subtasks,
    };
    setTasks([...tasks, newTask]);
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            tasks: [...board.tasks, newTask],
          };
        }
        return board;
      })
    );
  }

  function deleteTask(id: Id) {
    const delTasks = tasks.filter((task) => task.id !== id);
    setTasks(delTasks);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            tasks: newTasks,
          };
        }
        return board;
      })
    );
  }

  function updateTask(id: Id, content: string) {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            content,
          };
        }
        return task;
      })
    );
    setBoards(
      boards.map((board) => {
        if (board.id === activeBoard.id) {
          return {
            ...board,
            tasks: tasks.map((task) => {
              if (task.id === id) {
                return {
                  ...task,
                  content,
                };
              }
              return task;
            }),
          };
        }
        return board;
      })
    );
      
    
  }

  function onDragStart(event: DragStartEvent) {
    console.log("Drag started", event);
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;

    const activeColumnId = active.id;

    const overColumnId = over.id;
    if (activeColumnId === overColumnId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex(
        (column) => column.id === activeColumnId
      );

      const overColumnIndex = columns.findIndex(
        (column) => column.id === overColumnId
      );

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    if (!isActiveATask) return;

    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.id === activeId);

        const overIndex = tasks.findIndex((task) => task.id === overId);

        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";

    if (isActiveATask && isOverAColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((task) => task.id === activeId);

        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
    }
  }

  function generateId() {
    return Math.floor(Math.random() * 10001);
  }
};

export default KanabnBoard;

