import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiuCheckBoxModule } from './atomos/check-box/fiu-checkbox.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FiuCheckBoxModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
