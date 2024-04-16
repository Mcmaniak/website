import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CommonModule } from '@angular/common';
import { MorePageComponent } from './more-page/more-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutComponent } from './about/about.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full',
  },
  {
    component:HomeComponent,
    path:'home',
  },
  {
    component:MorePageComponent,
    path:'more',
  },
  {
    component:ProductDetailsComponent,
    path:'product-details'
  },
  {
    component:KontaktComponent,
    path:'kontakt'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ProductbuyComponent,
    path:'pBuy'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
