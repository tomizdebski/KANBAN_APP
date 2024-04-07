import React from "react";
import { Draggable } from "react-beautiful-dnd";




const Task = ({ task, index }: any) => {
  return (
    <Draggable 
    draggableId={`${task.id}`} 
    index={index}

    //isDragDisabled={task.id === 'task-1'} // This will disable dragging for the first task
    >
    

   

        {(provided: any, snapshot: any) => (
        <div className="border border-gray-300 p-4 mb-4 rounded-md text-black bg-white"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        >
     
            {task.content}
            {provided.placeholder}
        </div>
        )}
    </Draggable>
  );
};

export default Task;
