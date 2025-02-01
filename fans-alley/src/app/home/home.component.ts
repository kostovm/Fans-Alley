import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isVisible = false;
  isHidden = false;

  showMore(){
    this.isVisible = true;
    this.isHidden = true;
  }

}
