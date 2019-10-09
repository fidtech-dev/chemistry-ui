import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiuCheckboxComponent } from './fiu-checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    FiuCheckboxComponent
  ],
  exports: [
    FiuCheckboxComponent,
    MatCheckboxModule
  ]
})
export class FiuCheckBoxModule { }
