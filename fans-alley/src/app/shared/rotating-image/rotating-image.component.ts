import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-rotating-image',
  templateUrl: './rotating-image.component.html',
  styleUrls: ['./rotating-image.component.css']
})
export class RotatingImageComponent {

  @Input() sideClass: string = '';
  @Input() imageSrc: string = '';

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  onClick(): void {
    if (this.sideClass === 'left') {
      this.router.navigate(['/home'])
    } else if (this.sideClass === 'right') {
      this.sharedService.toggleMenuVisibility();
    }
  }
}
