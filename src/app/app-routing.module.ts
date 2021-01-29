import {  NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContentComponent } from './page-structure/content/content.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './page-structure/contact/contact.component';
import { AboutComponent } from './page-structure/about/about.component';

const routes: Routes=[
    {path:'home',component:ContentComponent},
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'product',loadChildren:'./features/product/product.module#ProductModule'},
    {path:'**',component:ErrorComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules, scrollPositionRestoration:'top',useHash:true})],
    exports:[RouterModule],
})
export class CustomAppRoutingModule{} 