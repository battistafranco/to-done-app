import { STATE } from './../models/todo';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _selectedTodo$ = new BehaviorSubject(null);
  public readonly selectedTodo$: Observable<
    Todo
  > = this._selectedTodo$.asObservable();

  private _showTaskType$ = new BehaviorSubject(STATE.Pending);
  public readonly showTaskType$: Observable<
    STATE
  > = this._showTaskType$.asObservable();

  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  setTodo(data) {
    this._selectedTodo$.next(data);
  }

  setShowTasksType(value) {
    this._showTaskType$.next(value);
  }

  saveTodo(data) {
    this.afs
      .collection('todos')
      .add(data)
      .then((ref) => {
        this.toastr.success('New Task Saved Succesfully');
      });
  }

  loadTodos() {
    return this.afs
      .collection('todos')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a: any) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            data.id = id;
            return { data };
          });
        })
      );
  }

  getTodoById(id: string) {
    return this.afs
      .collection('todos')
      .doc(id)
      .get()
      .pipe(
        map((res) => {
          let todo = res.data();
          todo.id = res.id;
          this.setTodo(todo);
          return todo;
        })
      );
  }

  updateTodo(todoId: string, updateData: Todo) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .set(updateData, { merge: false })
      .then(() => {
        this.toastr.success('Task Updated Successfully');
      });
  }

  deleteTodo(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .delete()
      .then(() => {
        this.toastr.error('Task Deleted Successfully');
      });
  }

  updateState(todoId: string, state) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ state: state })
      .then(() => {
        this.toastr.info('Task State Updated');
      });
  }

  markUncomplete(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ isCompleted: false })
      .then(() => {
        this.toastr.warning('Task Marked Uncompleted');
      });
  }
}
