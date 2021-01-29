import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
  // private products: Product[];
  productAdded = new EventEmitter<Product>();
  currentPage: string;
  //------------------------------------------------------
  baseUrl = 'https://mearn-stack-backend-test.herokuapp.com/';
  constructor(private httpClient: HttpClient) {}
  //-------------------------------------------------------
  //crud operations:
  //get all ---------------------------------------------------------------------
  getAllProducts() {
    return this.httpClient.get(`${this.baseUrl}product`);
  }
  //get one------------------------------------------------------------------------
  getProductById(id) {
    // return this.products.find(p => p.id === id);
    return this.httpClient.get(`${this.baseUrl}product/${id}`);
  }
  //add---------------------------------------------------------------------------------
  addProduct(product) {
    let body = {
      discount: product.discount,
      price: product.price,
      imagesUrls: product.imagesUrls,
      data: product.data,
      categoryId: product.category.id,
    };
    // const token = localStorage.getItem('token');
    // console.log(token)
    // const headers = new HttpHeaders({ authorization: token });
    // console.log(body);
    return this.httpClient.post(`${this.baseUrl}product/add`, body
    // , {headers,}
    );
  }
  //update---------------------------------------------------------------------------
  // updateProduct(product: Product) {
  //   // const index = this.products.findIndex((p) => p.id === product.id);
  // }
  updateProduct(product: Product) {
    let body = {
      discount: product.discount,
      price: product.price,
      imagesUrls: product.imagesUrls,
      data: product.data,
      categoryId: product.category.id,
    };
    return this.httpClient.patch(`${this.baseUrl}product/update`, body
    // , {headers,}
    );
  }
  //delete-----------------------------------------------------------------------------
  deleteProduct(id) {
    return this.httpClient.delete(`${this.baseUrl}product/delete`);
  }
//-------------------------------------------------------------------------
  searchByName(productName: string) {
    const prodName = productName.toLowerCase();
    return  this.httpClient.get(`${this.baseUrl}product/${prodName}`)
    // .subscribe(
    //   (res) => res.product.data.name.toLowerCase().includes(prodName)
    // );
  }
}
