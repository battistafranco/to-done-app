import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailsComponent } from './todo-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoDetailsComponent,
      },
    ]),
  ],
  exports: [TodoDetailsComponent],
})
export class TodoDetailsModule {}
