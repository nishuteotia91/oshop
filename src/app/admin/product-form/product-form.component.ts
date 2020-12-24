import { map } from 'rxjs/operators';
import { CategoryService } from './../../category.service';
import { Router,ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
//import  'rxjs/add/operators/take';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
product={};
  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route : ActivatedRoute) 
    { 
    this.categories$ = categoryService.getCategories();
    //console.log("categories",this.categories$)
    //console.log('this.categories$');

    //let id = this.route.snapshot.paramMap.get('id');
    //if(id) this.productService.get(id).take(1).subscribe(p =>this.product= p);
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.get(id).valueChanges().subscribe(p=> this.product = p)
      //this.productService.get(id).take(1)subsc
    }

     /*this.route.paramMap.subscribe((params)=> {  
      this.product$.id=params.get('id');
    });*/
    
  }
  save(product){
    this.productService.create(product);
    this.router.navigateByUrl("/admin/products");
    //console.log("save")
  }
  

  ngOnInit(){
  }

}
