import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private userService: UserService){}

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

  register(form: NgForm){
    if(form.invalid){
      return;
    }

    const { name, phone, email, username, about, password } = form.value;
    const imageUrl = this.previewUrl as string;

    this.userService.register(name, phone, email, username, about, password, imageUrl);
  }

}
