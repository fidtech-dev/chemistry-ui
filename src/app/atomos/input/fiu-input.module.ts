import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiuInputComponent } from './fiu-input.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [FiuInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[FiuInputComponent]
})
export class FiuInputModule { }
