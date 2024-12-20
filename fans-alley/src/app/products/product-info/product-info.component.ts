import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnDestroy{


    private subscription!: Subscription;
    isOwner: boolean = false;
    product: Product | null = null;

  constructor(public userService: UserService, private sharedService: SharedService, private apiService: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    const productId: string = this.route.snapshot.paramMap.get('id')!;

    this.subscription = this.sharedService.userInfo$.subscribe((user) => {
      const userId = user?._id;

      this.apiService.getSingleProduct(productId).subscribe({
        next: (product) => {
          this.product = product;

          if (this.userService.isLoggedIn() && userId === this.product._ownerId) {
            this.isOwner = true;
          }
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        },
      });
    });
  }

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
