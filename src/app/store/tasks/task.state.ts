import { dummyTasks } from "../../data/dummyData";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  priority: string;
  dueDate: Date;
}

export interface TaskState {
  taskList: Task[];
}

export const initialState: TaskState = {
  taskList: dummyTasks
};
