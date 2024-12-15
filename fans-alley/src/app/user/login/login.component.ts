import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  isVisible: boolean = false;

  ngAfterViewInit(): void {
    this.isVisible = true;
  }

}
