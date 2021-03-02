import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsSelectorComponent } from './chips-selector.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ChipsSelectorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ChipsSelectorComponent],
})
export class ChipsSelectorModule {}
