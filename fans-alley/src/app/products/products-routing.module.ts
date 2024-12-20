import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { CreateComponent } from "./create/create.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { authGuard } from "../auth.guard";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
{path: 'products', component: GalleryComponent},
{path: 'create', component: CreateComponent, canActivate: [authGuard]},
{path: 'products/:id/details', component: ProductInfoComponent},
{path: 'products/:id/edit', component: EditComponent, canActivate: [authGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}