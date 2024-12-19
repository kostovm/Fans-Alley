import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ProductsModule,
    FormsModule,
  ],
  exports: [
    UserRoutingModule
  ]
})
export class UserModule { }
