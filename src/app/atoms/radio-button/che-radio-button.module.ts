import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheInputComponent} from '../input/che-input.component';
import {CheRadioButtonComponent} from './che-radio-button.component';


@NgModule({
    declarations: [CheRadioButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [CheRadioButtonComponent]
})
export class CheRadioButtonModule {
}
