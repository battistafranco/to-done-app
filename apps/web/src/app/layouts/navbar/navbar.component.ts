import { TodosService } from './../../services/todos.service';
import { LayoutService } from './../../services/layout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  title$ = this.layoutService.title$;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private todosService: TodosService
  ) {}

  ngOnInit(): void {}

  goTo(route) {
    this.router.navigate([route]);
  }
}
