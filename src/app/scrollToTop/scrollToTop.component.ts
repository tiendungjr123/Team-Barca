import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-scrollToTop',
  templateUrl: './scrollToTop.component.html',
  styleUrls: ['./scrollToTop.component.css'],
})
export class ScrollToTopComponent implements OnInit {
  windowScrolled !: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (window.scrollY > 400) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }
  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit() {}
}
