import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../../services/todos.service';
import { LayoutService } from '../../services/layout.service';
import { ACTIONS } from '../../models/layout';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';

@Component({
  selector: 'nxlp-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditComponent implements OnInit {
  task$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
    private layoutService: LayoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskId = routeParams.get('id');
    this.task$ = this.todosService.getTodoById(taskId);
    this.setLayout();
  }

  setLayout() {
    this.layoutService.setLayout(ACTIONS.EDIT_TODO);
  }

  saveEditedTask(editedTask) {
    this.todosService.updateTodo(editedTask.id, editedTask);
    this.router.navigate(['todo']);
  }
}
