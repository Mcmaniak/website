import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbuy',
  templateUrl: './productbuy.component.html',
  styleUrls: ['./productbuy.component.css']
})
export class ProductbuyComponent implements OnInit{
  ngOnInit(): void {
    const checkbox = document.getElementById('check') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }
}
