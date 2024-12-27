import { Component, Input, OnInit} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Product } from 'src/app/types/product';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  @Input() product!: Product

  userId: string | null = null;
  isOwner: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private sharedService: SharedService, private userService: UserService){}

  ngOnInit(): void {

    this.sharedService.userInfo$.subscribe((user) => {
      if (user) {
        this.userId = user._id;

        if(this.userService.isLoggedIn()){
          this.isLoggedIn = true;

          if (this.userId === this.product?._ownerId) {
            this.isOwner = true;
          }
        }
      }
    });
    
  }

}
