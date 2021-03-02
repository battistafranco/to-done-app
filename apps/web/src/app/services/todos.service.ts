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

  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  setTodo(data) {
    this._selectedTodo$.next(data);
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
          this.setTodo(todo);
          return todo;
        })
      );
  }

  updateTodo(todoId: string, updateData: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ todo: updateData })
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

  markComplete(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ isCompleted: true })
      .then(() => {
        this.toastr.info('Task Marked Completed');
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
