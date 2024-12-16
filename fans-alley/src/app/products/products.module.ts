import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateComponent } from './create/create.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { PagesComponent } from './pages/pages.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { DetailsComponent } from './details/details.component';
import { OffersComponent } from './offers/offers.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    GalleryComponent,
    CreateComponent,
    ProductListComponent,
    PagesComponent,
    ProductInfoComponent,
    DetailsComponent,
    OffersComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductListComponent,
    PagesComponent
  ]
})
export class ProductsModule { }
