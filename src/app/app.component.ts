import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'cl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'claimList';

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  ngOnInit() {
    let body = this.document.querySelector('body');
    this.renderer.setStyle(body, 'overflow', 'hidden');
  }
}
