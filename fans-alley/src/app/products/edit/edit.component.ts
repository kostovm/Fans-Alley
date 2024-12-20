import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

   previewUrl: string | ArrayBuffer | null = null;
    selectedFile: File | null = null;
  
    constructor(private apiService: ApiService){}
  
    onFileSelected(event: Event): void{
      const input = event.target as HTMLInputElement;
  
      if(input.files && input.files.length > 0){
        this.selectedFile = input.files[0];
      }
  
      if(this.selectedFile){
  
        const reader = new FileReader();
  
        reader.onload = () =>{
          this.previewUrl = reader.result
        };
        reader.readAsDataURL(this.selectedFile);
        
      }
    }
  
    edit(form: NgForm){
      if(form.invalid){
        return;
      }
  
      const { productName, description, price} = form.value;
      const imageUrl = this.previewUrl as string;
  
      // this.apiService.addProduct(productName, description, category, price, sold, imageUrl)
    }

}
