import { Component, Input} from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{

  @Input() product: Product = {
    "_ownerId":"",
    "productName":"",
    "category":"",
    "description":"",
    "buyPrice": 0,
    "sold": false,
    "imageUrl":"",
    "_id":""}

  constructor(){}

}
