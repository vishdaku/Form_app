import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormioModule } from 'angular-formio';


import {AppRoutingModule,routingComponents} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormioModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
