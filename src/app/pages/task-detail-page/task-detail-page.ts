import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../../store/tasks/task.state';
import { Store } from '@ngrx/store';
import { selectTaskById } from '../../store/tasks/task.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail-page',
  imports: [CommonModule],
  templateUrl: './task-detail-page.html',
  styleUrl: './task-detail-page.css',
})
export class TaskDetailPage {
  private route = inject(ActivatedRoute)
  private store = inject(Store)
  task$!: Observable<Task | undefined>

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.task$ = this.store.select(selectTaskById(id))
  }
}
