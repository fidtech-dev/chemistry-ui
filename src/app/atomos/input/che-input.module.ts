import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheInputComponent } from './che-input.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CheInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[CheInputComponent]
})
export class CheInputModule { }
