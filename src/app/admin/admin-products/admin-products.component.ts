import { ProductService } from 'src/app/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$;
  constructor(private productService: ProductService) { 
    this.products$ =this.productService.getAll();
    console.log('Products',this.products$.subscribe(val => {console.log("val",val)}))
    
  }

  ngOnInit(): void {
  }


}
