import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-structure/header/header.component';
import { FooterComponent } from './page-structure/footer/footer.component';
import { ContentComponent } from './page-structure/content/content.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from './_services/product.services';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CustomAppRoutingModule } from './app-routing.module';
import { PaymentTypeService } from './_services/payment-type.service';
import { ProductCategoryService } from './_services/product-category';
import { ContactComponent } from './page-structure/contact/contact.component';
import { AboutComponent } from './page-structure/about/about.component';
import { ProductModule } from './features/product/product.module';
import { SharedDropdownModule } from './shared/dropdown/shared-dropdown.module';
import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CommonModule,
    ProductModule, 
    CustomAppRoutingModule,
    HttpClientModule,
    // ProductModule,
    SharedDropdownModule
  ],
  providers: [ProductService , PaymentTypeService, ProductCategoryService,
    {provide:HTTP_INTERCEPTORS, useClass:MyInterceptorService,multi:true}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
