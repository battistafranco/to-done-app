import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'nxlp-chips-selector',
  templateUrl: './chips-selector.component.html',
  styleUrls: ['./chips-selector.component.scss'],
})
export class ChipsSelectorComponent implements OnInit {
  @Output() selectedLabelsEvent = new EventEmitter<any>();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  labels: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.labels.push({ name: value.trim() });
    }

    if (input) {
      input.value = '';
    }

    this.selectedLabelsEvent.emit(this.labels);
  }

  remove(label: any): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
    }

    this.selectedLabelsEvent.emit(this.labels);
  }
}
