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
  "_ownerId":"",
  "productName":"",
  "category":"",
  "description":"",
  "buyPrice": 0,
  "sold": false,
  "imageUrl":"",
  "_id":""}

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
