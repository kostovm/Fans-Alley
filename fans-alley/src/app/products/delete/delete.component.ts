import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  productId: string = '';
  product: Product | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private sharedService: SharedService, private router: Router){}


  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id')!;

    this.apiService.getSingleProduct(this.productId).subscribe({
      next: (product) => {
        this.product = product;

        if (product) {

          if (this.product.imageUrl) {
            this.previewUrl = this.product.imageUrl;
          }

          this.sharedService.userInfo$.subscribe((user) => {
            const userId = user?._id;

            if (userId !== product._ownerId) {
              this.router.navigate([`/products/${this.productId}/details`])
            }

          });

        }

      },
      error: (err) => {
        console.error('Error fetching product:', err);
      },
    });
    
  }

  remove(){
    this.apiService.deleteProduct(this.productId)
  }

  goBack(){
    this.router.navigate([`/products/${this.productId}/details`])
  }


}
