import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-rotating-image',
  templateUrl: './rotating-image.component.html',
  styleUrls: ['./rotating-image.component.css']
})
export class RotatingImageComponent {

  @Input() sideClass: string = '';
  @Input() imageSrc: string = '';

  constructor(private sharedService: SharedService) { }

  onClick(): void {
    if (this.sideClass === 'left') {
      console.log('Home page')
    } else if (this.sideClass === 'right') {
      this.sharedService.toggleMenuVisibility();
    }
  }
}
