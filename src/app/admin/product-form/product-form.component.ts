import { CategoryService } from './../../category.service';
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) 
    { 
    this.categories$ = categoryService.getCategories();
    //console.log("categories",this.categories$)
    //console.log('this.categories$');
  }
  save(product){
    this.productService.create(product);
    this.router.navigate['/admin/products'];
    console.log(this.router.navigate)
  }

  ngOnInit(){
  }

}
