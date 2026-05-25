import { addTodo, editTodo, removeTodo, toggleComplete } from './task.actions';
import { initialState } from './task.state';
import { createReducer, on } from '@ngrx/store';


export const taskReducer = createReducer(
  initialState,
  on(addTodo, (state, { task }) => ({
    ...state,
    taskList: [...state.taskList, task],
  })),

  on(removeTodo,(state,{id})=>({
    ...state,
    taskList: state.taskList.filter(todo => todo.id !== id)
  })),

  on(editTodo,(state,{todo})=>({
    ...state,
    taskList:state.taskList.map(task =>
      task.id === todo.id ? todo :task
    )
  })),

  on(toggleComplete,(state,{id,status})=>({
    ...state,
    taskList: state.taskList.map(task => task.id === id ? {...task,completed:status} : task)
  }))
);
