import { ACTIONS } from './../../models/layout';
import { LayoutService } from './../../services/layout.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../models/todo';
import { TodosService } from '../../services/todos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nxlp-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoDetailsComponent implements OnInit {
  task$: Observable<Todo>;
  private subscriptions: { [key: string]: any } = {};
  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService,
    private layoutService: LayoutService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const taskId = routeParams.get('id');
    this.task$ = this.todosService.getTodoById(taskId);
    this.setLayout();
  }

  ngOnDestroy(): void {
    Object.keys(this.subscriptions).forEach((key) =>
      this.subscriptions[key].unsubscribe()
    );
  }

  setLayout() {
    this.layoutService.setLayout(ACTIONS.DETAILS_TODO);
    this.subscriptions.task = this.task$.subscribe((value) => {
      this.layoutService.setTitle(value.name);
    });
  }
}
