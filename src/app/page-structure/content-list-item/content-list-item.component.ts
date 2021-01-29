import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-content-list-item',
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.scss'],

})
export class ContentListItemComponent implements OnInit{
 @Input () product:Product;

  constructor(private productService : ProductService) {}


  ngOnInit(): void {} 
  
  getPrice():number{
    return this.product.discount ?this.product.price - this.product.discount : this.product.price ;
  }
  addedToCart():void{
    this.productService.productAdded.emit(this.product);
  }

}