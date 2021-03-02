import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}

  saveTodo(data) {
    this.afs
      .collection('todos')
      .add(data)
      .then((ref) => {
        this.toastr.success('New Todo Saved Succesfully');
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

  updateTodo(todoId: string, updateData: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ todo: updateData })
      .then(() => {
        this.toastr.success('Todo Updated Successfully');
      });
  }

  deleteTodo(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .delete()
      .then(() => {
        //this.afs.doc('categories/' + catId).update({todoCount: firestore.FieldValue.increment(-1)});
        this.toastr.error('Todo Deleted Successfully');
      });
  }

  markComplete(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ isCompleted: true })
      .then(() => {
        this.toastr.info('Todo Marked Completed');
      });
  }

  markUncomplete(todoId: string) {
    this.afs
      .collection('todos')
      .doc(todoId)
      .update({ isCompleted: false })
      .then(() => {
        this.toastr.warning('Todo Marked Uncompleted');
      });
  }
}
