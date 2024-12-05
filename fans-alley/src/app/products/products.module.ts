import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateComponent } from './create/create.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    GalleryComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
