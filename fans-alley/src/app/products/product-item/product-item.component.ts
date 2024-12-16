import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product = {"_ownerId":"35c62d76-8152-4626-8712-eeb96381bea8","productName":"Памперси","category":"Консумативи","description":"Почтти пълен пакет памперси","condition":"4","quantity":95,"imageUrl":"https://m.media-amazon.com/images/I/71UB0oZ+ccL._AC_UF1000,1000_QL80_.jpg","city":"София","address":"Обеля, бл. 116","_id":"3564027f-adcd-4425-b2c0-1253d2386c0c"}
}
