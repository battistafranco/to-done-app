import { Todo, STATE } from './../../models/todo';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nxlp-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
  @Input() task: Todo;
  @Output() saveEvent = new EventEmitter<Todo>();
  form: FormGroup;
  controls;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.task?.id) {
      this.task = {
        id: '',
        name: '',
        thumbnail: '',
        description: '',
        labels: '',
        due_date: '',
        notes: '',
        state: STATE.Pending,
      };
    }

    this.configForm(this.task);
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
      state: [value.state],
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
    this.controls.labels.patchValue(event);
  }

  onSubmit() {
    this.saveEvent.emit(this.form.value);
  }

  fileUploaded(event) {
    this.controls.thumbnail.patchValue(event);
  }
}
