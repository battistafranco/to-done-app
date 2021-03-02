import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'tdn-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HelloComponent implements OnInit {
  content: string;

  ngOnInit() {
    this.setContent();
  }

  async setContent() {
    try {
      const response = await fetch('README.md', {
        mode: 'no-cors',
      });

      this.content = marked(await response.text());
    } catch (err) {
      console.error(err);
    }
  }
}
