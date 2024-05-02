
export type Id = string | number;

export type BoardType = {
  id: Id;
  title: string;
  columns: Column[];
  tasks: Task[];
}

export type Column = {
  id: Id;
  title: string;
};

export type Task = {
  id: Id;
  columnId: Id;
  title: string;
  content: string;
  subtasks: Subtask[];
  status: "todo" | "doing" | "done";
};

export type Subtask = {
  id: Id;
  taskId: Id;
  content: string;
  completed: boolean;
};

export type BoardType = {
id: Id;
title: string;
columns: Column[] | [];  
tasks: Task[] | [];
};

