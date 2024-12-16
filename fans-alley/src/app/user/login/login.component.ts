import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() =>{
      this.isVisible = true;
    })
  }

  login(form: NgForm){
    if(form.invalid){
      return;
    }

    const {email, password} = form.value;
    console.log(email, password)
  }

}
