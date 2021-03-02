import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'nxlp-uploader-task',
  templateUrl: './uploader-task.component.html',
  styleUrls: ['./uploader-task.component.scss'],
})
export class UploaderTaskComponent implements OnInit {
  @Input() file: File;
  @Output() fileUploadedEvent = new EventEmitter<string>();
  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `images/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db
          .collection('files')
          .add({ downloadURL: this.downloadURL, path });

        this.fileUploadedEvent.emit(this.downloadURL);
      })
    );
  }

  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
