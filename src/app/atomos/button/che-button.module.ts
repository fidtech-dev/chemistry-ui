import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheButtonComponent} from './che-button.component';


@NgModule({
    declarations: [CheButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [CheButtonComponent]
})
export class CheButtonModule {
}
