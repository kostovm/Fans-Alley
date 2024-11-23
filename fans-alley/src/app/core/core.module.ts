import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RotatingImageComponent } from './rotating-image/rotating-image.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RotatingImageComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
