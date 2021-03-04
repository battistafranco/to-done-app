import { ACTIONS } from './../../models/layout';
import { TodosService } from './../../services/todos.service';

import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { newTodo, Todo } from '../../models/todo';

@Component({
  selector: 'nxlp-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent implements OnInit {
  task: Todo;
  constructor(
    private todosService: TodosService,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.setLayout(ACTIONS.ADD_TODO);
    this.task = newTodo();
    this.todosService.setTodo(this.task);
  }

  addNewTask(task) {
    this.todosService.setTodo(task);
  }
}
