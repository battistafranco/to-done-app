import { AddTodoComponent } from './add-todo.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoFormModule } from '../todo-form/todo-form.module';

@NgModule({
  declarations: [AddTodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTodoComponent,
      },
    ]),
    TodoFormModule,
  ],
  exports: [AddTodoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddTodoModule {}
