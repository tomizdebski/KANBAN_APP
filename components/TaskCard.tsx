'use client';
import { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { Id, Task } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {

    const [mouseIsOver, setMouseIsOver] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
      } = useSortable({
        id: task.id,
        data: {
          type: "Task",
          task,
        },
        disabled: editMode,
      });

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };

    const toggleEditMode = () => {
        setEditMode(prev => !prev);
        setMouseIsOver(false);
    };

    if (isDragging) {
        return (
            <div
            ref={setNodeRef}
            style={style}
            className="bg-gray-900 p-2 h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500 cursor-grab justify-between opacity-30"
            ></div>
        );
    }

    if (editMode) {
        return (
            <div 
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="bg-gray-900 p-2 h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab justify-between opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <textarea className="h-[90%] w-full resize-none border-none rounded bg-transparent text-white focus:outline-none" 
                value={task.content}
                autoFocus
                placeholder="Enter task content"
                onBlur={toggleEditMode}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && e.shiftKey) toggleEditMode();
                }}
                onChange={(e) => updateTask(task.id, e.target.value)}
                />
                
            </div>
        );
    }


  return (
    <div
    ref={setNodeRef}
    style={style}
    {...attributes}
    {...listeners}
    onClick={toggleEditMode}
    className="bg-gray-900 p-2 h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab justify-between opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out task"
    onMouseEnter={() => setMouseIsOver(true)}
    onMouseLeave={() => setMouseIsOver(false)}
    
    >
        <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
            {task.content}
        </p>
      
      {mouseIsOver && (<button className="stroke-white" onClick={() => deleteTask(task.id)}>
        <TrashIcon />
      </button>)}
    </div>
  );
}

export default TaskCard;
