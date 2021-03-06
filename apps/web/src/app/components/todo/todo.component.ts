import { ACTIONS } from './../../models/layout';
import { LayoutService } from './../../services/layout.service';
import { Observable } from 'rxjs';
import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { STATE } from '../../models/todo';

@Component({
  selector: 'nxlp-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$ = new Observable<any>();
  showTaskType$ = this.todosService.showTaskType$;

  constructor(
    private todosService: TodosService,
    private layoutService: LayoutService,
    public sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.layoutService.setLayout(ACTIONS.LIST_TODO);
    this.todos$ = this.todosService.loadTodos();
    this.todosService.setTodo(null);
    this.todosService.setShowTasksType(STATE.Pending);
    this.layoutService.setTitle('Pending Tasks');
  }

  goToDetails(id) {
    this.router.navigate(['/details', { id: id }]);
  }
}
