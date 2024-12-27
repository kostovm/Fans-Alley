import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { OffersService } from 'src/app/offers.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  @Input() product!: Product;
  @Output() offerAdded: EventEmitter<void> = new EventEmitter<void>();

  userId: string | null = null;
  username: string = '';
  isOwner: boolean = false;
  isLoggedIn: boolean = false;
  userOfferForThisProduct: number = 0;
  currentOffer: number = 0;

  constructor(private sharedService: SharedService, private userService: UserService, private offersService: OffersService){}

  ngOnInit(): void {

    this.sharedService.userInfo$.subscribe((user) => {
      if (user) {
        this.userId = user._id;
        this.username = user.username;

        if(this.userService.isLoggedIn()){
          this.isLoggedIn = true;

          if (this.userId === this.product?._ownerId) {
            this.isOwner = true;
          }
        }

        this.offersService.getUsersOffer(this.product._id, this.userId).subscribe(
          (offer) => {
            this.userOfferForThisProduct = offer || 0;
            this.currentOffer = this.userOfferForThisProduct + 1;
          }
        );
      }
    });
    
  }

  offer(): void{
    this.offersService.addOffer(this.currentOffer, this.userId!, this.product!._id, this.username);
  }

}
