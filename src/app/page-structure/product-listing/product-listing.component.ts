import { Component, OnInit } from '@angular/core';
import { Product} from 'src/app/_model/product'
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:Product[]=[];
  // data$: Observable<products[]>;
  pageNumbers: number[]= [];
  currentPage= 0;
  pageSize= 6;
  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    // this.data$ = this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe(
      (response)=>{
        this.products =response['product'];
        this.calculateNumberOfPages(response['numberOfProducts'])
    },
      (error)=>{console.log (error)},
      ()=>{},
    )
  }
  //-----------------------------

  calculateNumberOfPages(length){
    this.pageNumbers = [];
    for(let i = 0 ; i< length/this.pageSize ; i++){
      this.pageNumbers.push(i+1)
    }
  }
  //-----------------------------
  getSlicedArrayOfProducts():Product[]{
    const start = this.currentPage * this.pageSize;
  return this.products.slice(start,start+ this.pageSize);
  }
  //-----------------------------
  onSearchHandler(searchInput){
   return this.productService.searchByName(searchInput.value);
  }
//--------------------------------------------------------------------
sortLowToHigh(){
  //  this.productService.getAllProducts().pipe(map(data =>  data.sort(a, b)=> a - b)
   
}
// sort(){
//    this.productService.getAllProducts().pipe(map((data) => {
//   data.sort((a, b) => {
//       return a.value < b.value ? -1 : 1;
//    });
//   return data;
//   }))
// }


sort(order){
  let productList = this.productService.getAllProducts()
  switch (order.target.value) {
    case "Low" : {
        productList =productList.sort(
            (low, high) => +low.Price - +high.Price
          );
      break;          
    }
    case "High": {
     productList =productList.sort(
        (low, high) => +high.Price - +low.Price
      );
     break;
   }
    case "Name1": {
      productList = productList.sort(
        (low, high) => high.Name.toLowerCase().trim() >  low.Name.trim().toLowerCase() ? 1 : -1
      );
      break;
    }
    
  }
}
//----------------------------------------------------------------------

}
