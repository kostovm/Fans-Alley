import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register(form: NgForm){
    if(form.invalid){
      return;
    }

    const { name, phone, email, username, about } = form.value;
    console.log(name, phone, email, username, about)
  }

}
