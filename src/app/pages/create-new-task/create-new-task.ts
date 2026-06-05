import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/tasks/task.actions';

@Component({
  selector: 'app-create-new-task',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-new-task.html',
  styleUrl: './create-new-task.css',
})
export class CreateNewTask {
  constructor(private dialogRef: MatDialogRef<CreateNewTask>) {}
  private store = inject(Store);

  createTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    dueDate: new FormControl(new Date(), Validators.required),
  });

  close() {
    this.dialogRef.close();
  }

  submit() {
    const timestamp = Date.now().toString(26);
    const random = Math.random().toString(36).substring(2, 7);
    const id = `${timestamp}-${random}`;
    let task = {
      id: id,
      title: this.createTaskForm.value.title ?? '',
      description: this.createTaskForm.value.description ?? '',
      completed: this.createTaskForm.value.status as 'completed' | 'inprogress' | 'pending',
      dueDate: this.createTaskForm.value.dueDate ?? new Date(),
      priority: this.createTaskForm.value.priority ?? '',
    };
    this.store.dispatch(addTodo({ task }));
    console.log(this.createTaskForm.value);
    this.close()
  }
}
