import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailsComponent } from './todo-details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

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
    MaterialModule,
  ],
  exports: [TodoDetailsComponent],
})
export class TodoDetailsModule {}
