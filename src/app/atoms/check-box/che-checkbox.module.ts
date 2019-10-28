import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheCheckboxComponent } from './che-checkbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CheCheckboxComponent
  ],
  exports: [
    CheCheckboxComponent,
  ]
})
export class CheCheckboxModule { }
