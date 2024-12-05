import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingImageComponent } from './rotating-image/rotating-image.component';



@NgModule({
  declarations: [RotatingImageComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RotatingImageComponent
  ]
})
export class SharedModule { }
