import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiuValidationMessagesComponent } from './fiu-validation-messages.component';



@NgModule({
  declarations: [FiuValidationMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [FiuValidationMessagesComponent]
})
export class FiuValidationMessagesModule { }
