import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotatingImageComponent } from './rotating-image/rotating-image.component';
import { ErrorComponent } from './error/error.component';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';



@NgModule({
  declarations: [RotatingImageComponent, ErrorComponent, SubmitBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RotatingImageComponent,
    ErrorComponent,
    SubmitBtnComponent
  ]
})
export class SharedModule { }
