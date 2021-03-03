import { TodoFormModule } from './../todo-form/todo-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoEditComponent } from './todo-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoEditComponent,
      },
    ]),
    TodoFormModule,
  ],
  exports: [TodoEditComponent],
})
export class TodoEditModule {}
