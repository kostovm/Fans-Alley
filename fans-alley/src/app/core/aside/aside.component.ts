import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{
  menuIsVisible: boolean = false;

  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.sharedService.menuVisibility$.subscribe((visibility) => {
      this.menuIsVisible = visibility;
    })
  }

}
