import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit{

    productId: string = '';
    product: Product | null = null;
    previewUrl: string | ArrayBuffer | null = null;

constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router){}

ngOnInit(): void {
  this.productId = this.route.snapshot.paramMap.get('id')!;

  this.apiService.getSingleProduct(this.productId).subscribe({
    next: (product) => {
      this.product = product;

      if (product) {

        if (this.product.imageUrl) {
          this.previewUrl = this.product.imageUrl;
        }

      }

    },
    error: (err) => {
      console.error('Error fetching product:', err);
    },
  });

}

buy(){
console.log('bought!')
}

goBack(){
  this.router.navigate([`/products/${this.productId}/details`])
}

}
