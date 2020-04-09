import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlacesComponent } from './google-places-component/google-places-component';
import { AngularMaterial } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    GooglePlacesComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterial,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [GooglePlacesComponent, HeaderComponent]
})
export class SharedModule { }
