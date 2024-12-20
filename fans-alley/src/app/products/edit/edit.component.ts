import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  product: Product | null = null;
  productId: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {

    this.productId = this.route.snapshot.paramMap.get('id')!;

    //Getting the product info to fill the form

    this.apiService.getSingleProduct(this.productId).subscribe({
      next: (product) => {
        this.product = product;

        if (product) {

          // Getting the imageUrl

          if (this.product.imageUrl) {
            this.previewUrl = this.product.imageUrl;
          }

          // Checking if this is the author

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

  // Getting updated info from the form

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }

    if (this.selectedFile) {

      const reader = new FileReader();

      reader.onload = () => {
        this.previewUrl = reader.result
      };
      reader.readAsDataURL(this.selectedFile);

    }
  }

  edit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { productName, description, buyPrice } = form.value;
    const imageUrl = this.previewUrl as string;

    this.product!.productName = productName;
    this.product!.description = description;
    this.product!.buyPrice = buyPrice;
    this.product!.imageUrl = imageUrl;

    this.apiService.editProduct(this.product!, this.productId)
  }

}
