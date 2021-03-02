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
      preload: true,
      title: 'Add Task',
      activeSection: 'todo',
    },
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
