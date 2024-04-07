'use client'
import React from "react";
import Task from "./Task";
import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";

interface ColumnProps {
  column: {
    id: string;
    title: string;
  };
  tasks: Array<{
    id: string;
    content: string;
  }>;
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <div>
      <h3>{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                padding: 4,
                width: 250,
                minHeight: 500,
            }}
        >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
