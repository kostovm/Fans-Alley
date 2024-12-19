import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit, OnDestroy{
@Input() product = {
  "_ownerId":"35c62d76-8152-4626-8712-eeb96381bea8",
  "productName":"Памперси",
  "category":"Консумативи",
  "description":"Почтти пълен пакет памперси",
  "buyPrice": 15,
  "sold": false,
  "imageUrl":"https://m.media-amazon.com/images/I/71UB0oZ+ccL._AC_UF1000,1000_QL80_.jpg",
  "_id":"3564027f-adcd-4425-b2c0-1253d2386c0c"}

  private subscription!: Subscription;
  isOwner: boolean = false;

  constructor(public userService: UserService, private sharedService: SharedService){}

  ngOnInit(): void {
    let userId: string | undefined = undefined;

    this.subscription = this.sharedService.userInfo$.subscribe((user) => {
      userId = user?._id
    })

    if(this.userService.isLoggedIn() && userId === this.product._ownerId){
      this.isOwner = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
