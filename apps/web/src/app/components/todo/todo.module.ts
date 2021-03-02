import { MaterialModule } from './../material/material.module';
import { TodoComponent } from './todo.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),
    MaterialModule,
  ],
  exports: [TodoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TodoModule {}
