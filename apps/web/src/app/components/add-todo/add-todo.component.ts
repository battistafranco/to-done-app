import { TodosService } from './../../services/todos.service';

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'nxlp-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddTodoComponent implements OnInit {
  constructor(
    private todosService: TodosService,
    private router: Router,
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutService.showAddButton(false);
  }

  addNewTask(task) {
    console.log(task);
    this.todosService.saveTodo(task);
    this.router.navigate(['/']);
  }
}
