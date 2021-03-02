import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploaderComponent } from './uploader.component';
import { UploaderTaskModule } from '../uploader-task/uploader-task.module';
import { DropzoneDirective } from '../../directives/dropzone.directive';

@NgModule({
  declarations: [UploaderComponent, DropzoneDirective],
  imports: [CommonModule, UploaderTaskModule],
  exports: [UploaderComponent, DropzoneDirective],
})
export class UploaderModule {}
