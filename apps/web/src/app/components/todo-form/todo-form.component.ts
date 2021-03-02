import { Todo } from './../../models/todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nxlp-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() saveEvent = new EventEmitter<Todo>();
  form: FormGroup;
  controls;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    let value = {
      id: '',
      name: '',
      thumbnail: '',
      description: '',
      labels: '',
      due_date: '',
      notes: '',
      state: 1,
    };
    this.configForm(value);
  }

  configForm(value: Todo) {
    this.form = this.fb.group({
      id: [value.id],
      name: [value.name, [Validators.required]],
      thumbnail: [value.thumbnail],
      description: [value.description],
      labels: [value.labels],
      due_date: [value.due_date],
      notes: [value.notes],
    });

    this.controls = {
      id: this.form.controls.id,
      name: this.form.controls.name,
      thumbnail: this.form.controls.thumbnail,
      description: this.form.controls.description,
      labels: this.form.controls.labels,
      due_date: this.form.controls.due_date,
      notes: this.form.controls.notes,
      state: this.form.controls.state,
    };
  }

  handleSelectedLabels(event) {
    console.log(event);
    this.controls.labels.patchValue(event);
  }

  onSubmit() {
    console.log(this.form.value);
    this.saveEvent.emit(this.form.value);
  }

  fileUploaded(event) {
    this.controls.thumbnail.patchValue(event);
  }
}
