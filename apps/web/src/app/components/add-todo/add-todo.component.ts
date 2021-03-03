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

@Component({
  selector: 'nxlp-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.setLayout(ACTIONS.ADD_TODO);
    this.todosService.setTodo(null);
  }

  addNewTask(task) {
    console.log(task);
    this.todosService.saveTodo(task);
    this.router.navigate(['/']);
  }
}
