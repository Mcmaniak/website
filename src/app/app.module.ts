import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MorePageComponent } from './more-page/more-page.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutComponent } from './about/about.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';

@NgModule({
  declarations: [
    AppComponent,
    MorePageComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    KontaktComponent,
    AboutComponent,
    ProductbuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
