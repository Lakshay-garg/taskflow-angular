import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTasks } from '../../store/tasks/task.selector';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap, map } from 'rxjs';
import { Router } from '@angular/router';
import { Task } from '../../store/tasks/task.state';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { CreateNewTask } from '../create-new-task/create-new-task';

@Component({
  selector: 'app-task-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  private store = inject(Store);
  private router = inject(Router);
  private dialog = inject(MatDialog);
  

  tasks = toSignal(this.store.select(selectTasks), { initialValue: [] });

  //filter signal
  selectedStatus = signal('');
  selectedPriority = signal('');
  searchText = signal('');

  filteredTasks = computed(() => {
    let tasks = this.tasks();

    if (this.searchText()) {
      tasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(this.searchText().toLowerCase()),
      );
    }

    if (this.selectedStatus()) {
      tasks = tasks.filter((task) => task.completed == this.selectedStatus());
    }

    if (this.selectedPriority()) {
      tasks = tasks.filter((task) => task.priority.toLowerCase() == this.selectedPriority());
    }

    return tasks;
  });

  

  goToTaskDetailPage(task: Task) {
    this.router.navigate(['/auth/task-detail', task.id]);
  }

  createNewTask(){
    const dialogRef = this.dialog.open(CreateNewTask,{
      width:'800px',
      disableClose:false
    })
  }

  // searchControl = new FormControl();

  // filteredTasks = this.searchControl.valueChanges.pipe(
  //   startWith(''),
  //   debounceTime(500),
  //   distinctUntilChanged(),
  //   switchMap((searchText) =>
  //     this.store
  //       .select(selectTasks)
  //       .pipe(
  //         map((tasks:any) =>
  //           tasks.filter((task:any) =>
  //             task.title.toLowerCase().includes((searchText || '').toLowerCase()),
  //           ),
  //         ),
  //       ),
  //   ),
  // );
}
