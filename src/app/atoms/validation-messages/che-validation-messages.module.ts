import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheValidationMessagesComponent } from './che-validation-messages.component';



@NgModule({
  declarations: [CheValidationMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [CheValidationMessagesComponent]
})
export class CheValidationMessagesModule { }
