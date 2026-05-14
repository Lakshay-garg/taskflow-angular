import { createAction, props } from '@ngrx/store';
import { Task } from './task.state';

export const addTodo = createAction(
    '[Todo] Add Todo',
    props<{task:Task}>()
)

export const removeTodo = createAction(
    '[Todo] Remove Todo',
    props<{id:number}>()
)

export const editTodo = createAction(
    '[Todo] Edit Todo',
    props<{todo:Task}>()
)

export const toggleComplete = createAction(
    '[Todo] Toggle Todo',
    props<{id:number}>()
)