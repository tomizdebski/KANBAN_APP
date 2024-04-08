'use client'
import React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";

const Container = styled.div`
  background-color: #f4ff7;
  border-radius: 2.5px;
  width: 200px;
  height: 475px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  background-color: pink;
  text-align: center;
`;
const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 3px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
`;

interface ColumnProps {
  column: {
    id: string;
    title: string;
  };
  tasks: {
    id: string;
    content: string;
  }[];
}

const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index}/>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;

