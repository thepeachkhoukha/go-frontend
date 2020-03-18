import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LogInComponent } from './auth/log-in/log-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterial } from '../angular-material.module';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { SecurityRoutingModule } from './security-routing-module';
import { AuthGuard } from './guards/Auth.guard';

@NgModule({
  declarations: [
    AuthComponent,
    LogInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterial,
    FileUploadModule,
    HttpClientModule
  ],
  exports:[
    AuthComponent,
    LogInComponent,
    SignUpComponent
  ],
  providers:[AuthGuard]
})
export class SecurityModule { }
