import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private route: ActivatedRoute) { }

  isProductRoute(): boolean {
    return this.route.snapshot.routeConfig?.path === 'products';
  }
}
