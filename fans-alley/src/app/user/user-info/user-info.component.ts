import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserForAuth } from 'src/app/types/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{

  user: UserForAuth | null = null;

  constructor(private sharedService: SharedService){}

ngOnInit(): void {
  this.sharedService.userInfo$.subscribe((userInfo) => {
    this.user = userInfo;
  });
}

}
