import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FiuCheckBoxModule} from './atomos/check-box/fiu-checkbox.module';
import {FormsModule} from '@angular/forms';
import {FiuButtonModule} from './atomos/button/fiu-button.module';
import {FiuInputModule} from './atomos/input/fiu-input.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FiuCheckBoxModule,
        FormsModule,
        FiuButtonModule,
        FiuInputModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
