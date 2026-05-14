import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompletedTasks, selectOverdueTasks, selectPendingTasks, selectTotalTasks } from '../../store/tasks/task.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  private store = inject(Store)
  
  totalTodos$ = this.store.select(selectTotalTasks);

  completedTodos$ = this.store.select(selectCompletedTasks);

  pendingTodos$ = this.store.select(selectPendingTasks);

  overdueTodos$ = this.store.select(selectOverdueTasks)
}
