import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ]
})
export class CoreModule { }
