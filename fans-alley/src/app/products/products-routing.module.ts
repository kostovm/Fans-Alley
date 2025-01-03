import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { CreateComponent } from "./create/create.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { authGuard } from "../auth.guard";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";
import { BuyComponent } from "./buy/buy.component";

const routes: Routes = [
{path: 'products', component: GalleryComponent},
{path: 'create', component: CreateComponent, canActivate: [authGuard]},
{path: 'products/:id/details', component: ProductInfoComponent},
{path: 'products/:id/edit', component: EditComponent, canActivate: [authGuard]},
{path: 'products/:id/delete', component: DeleteComponent, canActivate: [authGuard]},
{path: 'products/:id/buy', component: BuyComponent, canActivate: [authGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductsRoutingModule {}