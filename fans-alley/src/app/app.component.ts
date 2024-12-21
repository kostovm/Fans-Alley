import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fans-alley';

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.sharedService.restoreUserInfo();
  }

}
