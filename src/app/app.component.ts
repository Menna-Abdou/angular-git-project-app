import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './_model/product';
import { ProductService } from './_services/product.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'my-app';
  productArray:Product[] =[]; 
  currentPage:string;
  // currentPage:string ="content";

constructor(private productService:ProductService){

}
  ngDoCheck(): void {
    this.currentPage= this.productService.currentPage;

  }


  addToCartAtHeader(product:Product):void{
    console.log(product);
    this.productArray.push(product);
  }

}
