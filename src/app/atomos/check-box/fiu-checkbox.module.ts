import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiuCheckboxComponent } from './fiu-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FiuCheckboxComponent
  ],
  exports: [
    FiuCheckboxComponent,
  ]
})
export class FiuCheckBoxModule { }
