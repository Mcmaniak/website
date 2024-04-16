import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
    this.scrollToTop();
  }

  private scrollToTop(): void {
    // Use Renderer2 for better Angular compatibility
    if (this.renderer) {
      this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
      this.renderer.setProperty(document.body, 'scrollTop', 0);
    } else {
      // Directly access the window object if Renderer2 is not available
      window.scrollTo(0, 0);
    }
  }
}
