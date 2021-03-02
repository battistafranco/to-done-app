import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nxlp-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent {
  @Output() fileUploadedEvent = new EventEmitter<string>();
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.files = [];
    if (files.length) {
      this.files.push(files.item(0));
    }
  }

  openFile() {
    document.querySelector('input').click();
  }

  fileUploaded(event) {
    this.fileUploadedEvent.emit(event);
  }
}
