import { Todo, STATE, newTodo } from './../../models/todo';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'nxlp-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit, OnDestroy {
  @Input() task: Todo;
  @Output() saveEvent = new EventEmitter<Todo>();
  form: FormGroup;
  controls;

  private subscriptions: { [key: string]: any } = {};
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.configForm(this.task);
    this.initSubscriptions();
  }

  ngOnDestroy(): void {
    Object.keys(this.subscriptions).forEach((key) =>
      this.subscriptions[key].unsubscribe()
    );
  }

  initSubscriptions() {
    this.subscriptions.form = this.form.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        let todo = value;
        todo.valid = this.form.valid;
        this.saveEvent.emit(value);
      });
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

  fileUploaded(event) {
    this.controls.thumbnail.patchValue(event);
  }
}
