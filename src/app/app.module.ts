import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheCheckboxModule} from './atomos/check-box/che-checkbox.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheButtonModule} from './atomos/button/che-button.module';
import {CheInputModule} from './atomos/input/che-input.module';
import {CheValidationMessagesModule} from './atomos/validation-messages/che-validation-messages.module';
import {ButtonDemoComponent} from './demo/button/button.component';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {HighlightModule} from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import {DocumentationComponent} from './demo/documentation/documentation.component';
import {InputComponent} from './demo/input/input.component';
import {CheckboxComponent} from './demo/checkbox/checkbox.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GetStartedComponent } from './demo/get-started/get-started.component';

export function hljsLanguages() {
    return [
        {name: 'typescript', func: typescript},
        {name: 'scss', func: scss},
        {name: 'xml', func: xml}
    ];
}

@NgModule({
    declarations: [
        AppComponent,
        ButtonDemoComponent,
        DocumentationComponent,
        InputComponent,
        CheckboxComponent,
        GetStartedComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CheCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
        CheButtonModule,
        CheInputModule,
        CheValidationMessagesModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        }),
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [ToastrModule]
})
export class AppModule {
}
