import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FiuCheckBoxModule} from './atomos/check-box/fiu-checkbox.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheButtonModule} from './atomos/button/che-button.module';
import {FiuInputModule} from './atomos/input/fiu-input.module';
import {FiuValidationMessagesModule} from './atomos/validation-messages/fiu-validation-messages.module';
import {ButtonDemoComponent} from './demo/button/button.component';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {HighlightModule} from 'ngx-highlightjs';
import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FiuCheckBoxModule,
        ReactiveFormsModule,
        CodeHighlighterModule,
        FormsModule,
        CheButtonModule,
        FiuInputModule,
        FiuValidationMessagesModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
