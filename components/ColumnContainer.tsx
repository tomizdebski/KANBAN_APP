"use client";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import { Column, Id, Task } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";

import TaskCard from "./TaskCard";
import FormAddTask from "./FormAddTask";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (task: Task) => void;
  deleteTask: (id: Id) => void;
  updateTask: (
    id: Id,
    content: string,
    status: "todo" | "doing" | "done"
  ) => void;
  tasks: Task[];
}

const ColumnContainer = (props: Props) => {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    deleteTask,
    updateTask,
    tasks,
  } = props;
  const [editMode, setEditMode] = useState(false);
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-light_blue dark:bg-deep_gray border-2 border-fiolet opacity-60 w-[220px] h-[80%] rounded-md flex flex-col"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
    
    w-[220px] 
    h-[80%]
    flex flex-col
    bg-light_blue dark:bg-deep_gray
    "
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => setEditMode(true)}
        className="bg-light_blue dark:bg-deep_gray  h-[60px] text-md  rounded-md rounded-b-none p-3 font-bold  flex items-center justify-between"
      >
        <div className="flex gap-2 items-center">
          <div className={`w-3.5 h-3.5 bg-fiolet rounded-full`} />

          {!editMode && (
            <span className="uppercase">
              {column.title} {`(${tasks.length})`}
            </span>
          )}
          {editMode && (
            <input
              className="bg-black focus:border-fiolet w-[150px] border rounded px-2 outline-none"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          className="stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor rounded px-1 py-2 "
          onClick={() => deleteColumn(column.id)}
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col gap-2 pl-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
          <FormAddTask createTask={createTask} columnId={column.id} />
        </SortableContext>
      </div>

      {/* <button
        className="m-4 pl-4 pr-6 py-3 bg-indigo-500 rounded-full shadow justify-center items-center gap-2 flex bg-none"
        onClick={() => createTask(column.id)}
      >
        <PlusIcon />
        Add task
      </button> */}
    </div>
  );
};

export default ColumnContainer;
