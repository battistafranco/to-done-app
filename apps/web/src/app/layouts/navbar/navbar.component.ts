import { TodosService } from './../../services/todos.service';
import { LayoutService } from './../../services/layout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { STATE } from '../../models/todo';
import { ACTIONS } from '../../models/layout';

@Component({
  selector: 'tdn-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showAddButton$ = this.layoutService.showAddButton$;
  showEditButtons$ = this.layoutService.showEditButtons$;
  showDetailsButtons$ = this.layoutService.showDetailsButtons$;
  selectedTodo$ = this.todosService.selectedTodo$;
  selectedAction$ = this.layoutService.selectedAction$;
  title$ = this.layoutService.title$;
  showTaskType$ = this.todosService.showTaskType$;
  STATE = STATE;
  ACTIONS = ACTIONS;
  taskTypes = STATE.Pending;
  selectedTodo;
  private subscriptions: { [key: string]: any } = {};

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    Object.keys(this.subscriptions).forEach((key) =>
      this.subscriptions[key].unsubscribe()
    );
  }

  initSubscriptions() {
    this.subscriptions.taskTypes = this.showTaskType$.subscribe((value) => {
      if (value !== null && value !== undefined) {
        this.taskTypes = value;
      }
    });

    this.subscriptions.saveTodo = this.selectedTodo$.subscribe((todo) => {
      this.selectedTodo = todo;
    });
  }

  goTo(route) {
    this.router.navigate([route]);
  }

  updateState(todo, state) {
    this.todosService.updateState(todo.id, state);
    this.goTo('todo');
  }

  saveTodo() {
    if (this.selectedTodo?.id && this.selectedTodo?.valid) {
      this.todosService.updateTodo(this.selectedTodo.id, this.selectedTodo);
      this.goTo('todo');
    } else if (this.selectedTodo?.valid) {
      this.todosService.addTodo(this.selectedTodo);
      this.goTo('todo');
    }
  }

  toogleTaskTypes() {
    if (this.taskTypes === STATE.Pending) {
      this.todosService.setShowTasksType(STATE.Completed);
      this.layoutService.setTitle('Completed Tasks');
    } else {
      this.todosService.setShowTasksType(STATE.Pending);
      this.layoutService.setTitle('Pending Tasks');
    }
  }

  deleteTodo(id) {
    this.todosService.deleteTodo(id);
    this.goTo('todo');
  }
}
