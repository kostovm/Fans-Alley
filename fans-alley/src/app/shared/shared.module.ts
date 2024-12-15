import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingImageComponent } from './rotating-image/rotating-image.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [RotatingImageComponent, ErrorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RotatingImageComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
