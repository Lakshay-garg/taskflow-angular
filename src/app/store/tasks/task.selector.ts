import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "./task.state";

// Feature Selector
export const selectTaskState = 
 createFeatureSelector<TaskState>('task');

// All Tasks
export const selectTasks = createSelector(
    selectTaskState,
    (state) => state.taskList
)

// Total Tasks
export const selectTotalTasks = createSelector(
    selectTasks,
    (tasks) => tasks.length
)


// Completed Tasks
export const selectCompletedTasks = createSelector(
    selectTasks,
    (todos) => todos.filter(todo => todo.completed).length
)

// Pending Tasks
export const selectPendingTasks = createSelector(
    selectTasks,
    (todos) => todos.filter(todo => !todo.completed).length
)

//Overdue Tasks
export const selectOverdueTasks = createSelector(
    selectTasks,
    (todos)=> todos.filter(todo => !todo.completed && new Date(todo.dueDate) < new Date()).length
)