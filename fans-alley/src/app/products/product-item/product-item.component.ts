import { Component, Input, OnInit } from '@angular/core';
import { OffersService } from 'src/app/offers.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | null = null;

  isOwner: boolean = false;
  hasBestOffer: boolean = false;
  offersCount: number = 0;
  userOfferForThisProduct: number = 0;
  userId: string | null = null;
  currentOffer: number = 0;

  constructor(
    public userService: UserService, 
    private sharedService: SharedService, 
    private offersService: OffersService
  ) {}

  ngOnInit(): void {

    this.sharedService.userInfo$.subscribe((user) => {
      if (user) {
        this.userId = user._id;

        if (this.userService.isLoggedIn() && this.userId === this.product?._ownerId) {
          this.isOwner = true;
        }

        if (this.product?._id && this.userId) {

          this.offersService.getOffersCount(this.product._id).subscribe(
            (response) => this.offersCount = response
          );

          this.offersService.getUsersOffer(this.product._id, this.userId).subscribe(
            (offer) => {
              this.userOfferForThisProduct = offer || 0;
              this.currentOffer = this.userOfferForThisProduct + 1;
            }
          );

          this.offersService.isUserWithBestOffer(this.product._id, this.userId).subscribe(
            (response) => this.hasBestOffer = response
          )

        }
      }
    });
  }
}