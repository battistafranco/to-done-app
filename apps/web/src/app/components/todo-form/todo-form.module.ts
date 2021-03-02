import { UploaderModule } from './../uploader/uploader.module';
import { ChipsSelectorModule } from './../chips-selector/chips-selector.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form.component';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChipsSelectorModule,
    UploaderModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, TodoFormComponent],
})
export class TodoFormModule {}
