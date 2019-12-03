import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheSelectComponent} from './che-select.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [CheSelectComponent],
    imports: [
        CommonModule,
      NgSelectModule,
        FormsModule
    ],
    exports: [CheSelectComponent]
})
export class CheSelectModule {
}
