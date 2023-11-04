import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  imgUrl :string = 'https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png';
  name = 'Angular';
  price = 100;
  color = 'red';
  itemsLeft = 5;
  Discount = 0.5;

  addToCart() {
    if(this.itemsLeft > 0){
      this.itemsLeft = this.itemsLeft - 1;
    }
    else{
      alert("Out of Stock");
    }


  }

  // constructor() { }
}
