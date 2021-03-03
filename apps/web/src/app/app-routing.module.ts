import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/todo/todo.module').then((m) => m.TodoModule),
    data: {
      preload: true,
      title: 'Todo',
      activeSection: 'todo',
    },
    // canActivate: [AuthGuard],
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./components/todo/todo.module').then((m) => m.TodoModule),
    data: {
      preload: true,
      title: 'Todo',
      activeSection: 'todo',
    },
    // canActivate: [AuthGuard],
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./components/add-todo/add-todo.module').then(
        (m) => m.AddTodoModule
      ),
    data: {
      preload: false,
      title: 'Add Task',
      activeSection: 'todo',
    },
    // canActivate: [AuthGuard],
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./components/todo-details/todo-details.module').then(
        (m) => m.TodoDetailsModule
      ),
    data: {
      preload: false,
      title: 'Task Details',
      activeSection: 'details',
    },
    // canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./components/todo-edit/todo-edit.module').then(
        (m) => m.TodoEditModule
      ),
    data: {
      preload: false,
      title: 'Edit Task',
      activeSection: 'edit',
    },
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
