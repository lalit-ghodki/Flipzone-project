import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
products: Product[];

  constructor(private productService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
private getProducts(){
  this.productService.getproductdetails().subscribe(data => {
    this.products=data;
  })
}
updateProduct(id:number){
  this.router.navigate(['update-product',id]);
}
}
