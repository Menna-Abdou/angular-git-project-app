import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentListItemComponent } from 'src/app/page-structure/content-list-item/content-list-item.component';
import { ProductListingComponent } from 'src/app/page-structure/product-listing/product-listing.component';
import { StrPipe } from 'src/app/pipes/str.pipe';
import { AuthGuardService } from 'src/app/_services/auth-guard.service';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
@NgModule({
    declarations:[
        ProductListingComponent,
        ContentListItemComponent,
        AddProductComponent,
        ProductDetailsComponent,
        StrPipe
    ],
    imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        {path:'',children:[
            {path:'',component:ProductListingComponent},
            // {path:'add',component:AddProductComponent,canActivate:[AuthGuardService]},
            {path:'add',component:AddProductComponent},
            {path:'details/:id',component:ProductDetailsComponent},
            {path:'edit/:id',component:AddProductComponent}
        ] },
    ])
    ],
    exports:[],
    providers:[],
})
export class ProductModule{}