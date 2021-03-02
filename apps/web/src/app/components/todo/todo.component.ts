import { LayoutService } from './../../services/layout.service';
import { Observable } from 'rxjs';
import { TodosService } from './../../services/todos.service';
//import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'nxlp-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos$ = new Observable<any>();
  constructor(
    private todosService: TodosService,
    private layoutService: LayoutService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.layoutService.showAddButton(true);
    this.todos$ = this.todosService.loadTodos();
  }
}
