import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FiuButtonComponent} from './fiu-button.component';


@NgModule({
    declarations: [FiuButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [FiuButtonComponent]
})
export class FiuButtonModule {
}
