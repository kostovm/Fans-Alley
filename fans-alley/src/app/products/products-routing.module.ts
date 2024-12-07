import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { CreateComponent } from "./create/create.component";
import { ProductInfoComponent } from "./product-info/product-info.component";

const routes: Routes = [
{path: 'products', component: GalleryComponent},
{path: 'create', component: CreateComponent},
{path: 'details', component: ProductInfoComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}