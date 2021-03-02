import { ACTIONS } from './../../models/layout';
import { LayoutService } from './../../services/layout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'nxlp-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
})
export class TodoDetailsComponent implements OnInit {
  task$: Observable<Todo>;
  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskId = routeParams.get('id');
    this.task$ = this.todosService.getTodoById(taskId);
    this.setLayout();
  }

  setLayout() {
    this.layoutService.setLayout(ACTIONS.DETAILS_TODO);
  }
}
