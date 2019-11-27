import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheTextareaComponent} from './che-textarea.component';


@NgModule({
    declarations: [CheTextareaComponent],
    imports: [
        CommonModule
    ],
    exports: [CheTextareaComponent]
})
export class CheTextareaModule {
}
