import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
// static cartArray;
// @Input() cartArray:Product[] =[] ; 
cartArray:Product[] =[]; 
isOpend=false;

  //----------------------------------------------------------------------------------
  constructor(private productService:ProductService) { }
  //----------------------------------------------------------------------------------
  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.cartArray.push(res)
        console.log(res);},
      (err) => {console.log(err);},
      (completed) => {console.log("Hamada is completed !!");},
    )
  }
  //----------------------------------------------------------------------------------
  
   changeCurrentPage(dest:string){
    this.productService.currentPage = dest;
  }
  //----------------------------------------------------------------------------------

  calculateTotalAmount():number{
    let total:number=0;
    for(let i =0 ;i <this.cartArray.length;i++)
    {
      let product = this.cartArray[i];
      total += product.discount ? product.price - product.discount :product.price;
    }
    return total;
  }
  //----------------------------------------------------------------------------------

removeProduct(product){
      for(let i =0 ;i <this.cartArray.length;i++)
      {
        let index=this.cartArray[i];
        product.splice(index,1);
      }
}

 onAllDeleted(id){
        // this.product= this.product.filter(p =>p.id == id);
     return this.cartArray.filter(p =>p.id == id);
      }

 onDeleted(id){
        // this.product.tag= this.product.tag.filter(p =>p.id !== id);
        const index = this.product['id'];
        return this.product.splice(index,1);
      }

 remove(){
        this.productService.productAdded.subscribe(
          (res) => {this.cartArray.pop()},
          (err) => {console.log(err);},
          (completed) => {console.log("Hamada is completed !!");},
        )
      }
}