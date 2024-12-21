import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { OffersService } from 'src/app/offers.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  
@Input() product: Product | null = null

  isOwner: boolean = false;
  offersCount: number = 0

  constructor(public userService: UserService, private sharedService: SharedService, private offersService: OffersService){}

  ngOnInit(): void {
    let userId: string | undefined = undefined;

    this.sharedService.userInfo$.subscribe((user) => {
      userId = user?._id
    })

    if(this.userService.isLoggedIn() && userId === this.product!._ownerId){
      this.isOwner = true;
    }

    if(this.product?._id){
      this.offersService.getOffersCount(this.product._id).subscribe(
        (response) => this.offersCount = response
      )
    }
  }

}
