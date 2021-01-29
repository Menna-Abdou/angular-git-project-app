import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_model/payment-types';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategory } from 'src/app/_model/product-category';
import { ProductCategoryService } from 'src/app/_services/product-category';
import { Product } from 'src/app/_model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.services';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})



export class AddProductComponent implements OnInit {
product:Product = { data:[{}] , paymentTypes:[{}] , tag:[] , category:{} };
paymentTypes:PaymentType[] = [];
productCategory:ProductCategory[] = [];
editMode:boolean = false;
//----------------------------------------------------------------
  constructor(
    private activatedRoute:ActivatedRoute, 
    private paymentTypeService:PaymentTypeService,
     private productCategoryService:ProductCategoryService,
     private productService:ProductService,
     private router:Router
     ) {}
//- add & update------------------------------------------------------------
  ngOnInit(): void {

    this.editMode = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'edit' && true;
    if(this.editMode)
    {
      let id  = this.activatedRoute.snapshot.params.id;
      this.productService.getProductById(id).subscribe(
        (resopnse) => {this.product = resopnse['product']},
        () => {},
        () => {}
      )
    }
    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllProductCategory();

  }
//--------------------------------------------------------------
  onSubmit(){
    this.productService.addProduct(this.product).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/product','listing'])
      },
      (error)=>{console.log(error)},
      ()=>{},
    )
  }
//--------------------------------------------------------------
  onTagAdded(tagInput){
    this.product.tag.push({name:tagInput.value});
    tagInput.value = '';
  }

//--------------------------------------------------------------  
  onTagDeleted(id){
    // this.product.tag= this.product.tag.filter(p =>p.id !== id);
    const index = this.product.tag['id'];
    return this.product.tag.splice(index,1);
  }
  //--------------------------------------------------------
  onCheckBoxPressed(i){
    this.product.paymentTypes.push(this.paymentTypes[i])
  }

//------------------------------------------------------------
onTagAllDeleted(id){
      this.product.tag= this.product.tag.filter(p =>p.id == id);
    }
  }
//--------------------------------------------------------

