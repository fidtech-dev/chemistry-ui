import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CheCheckboxModule} from './atoms/check-box/che-checkbox.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheButtonModule} from './atoms/button/che-button.module';
import {CheInputModule} from './atoms/input/che-input.module';
import {CheValidationMessagesModule} from './atoms/validation-messages/che-validation-messages.module';
import {ButtonComponent} from './demo/button/button.component';
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
import { CheIconComponent } from './atoms/icon/che-icon.component';
import {CheIconModule} from './atoms/icon/che-icon.module';
import {IconComponent, MyFilterPipe} from './demo/icon/icon.component';
import { CheTextareaComponent } from './atoms/textarea/che-textarea.component';
import {CheTextareaModule} from './atoms/textarea/che-textarea.module';
import { TextareaComponent } from './demo/textarea/textarea.component';

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
        ButtonComponent,
        DocumentationComponent,
        InputComponent,
        CheckboxComponent,
        GetStartedComponent,
        IconComponent,
        MyFilterPipe,
        TextareaComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CheCheckboxModule,
        CheIconModule,
        ReactiveFormsModule,
        FormsModule,
        CheButtonModule,
        CheInputModule,
        CheValidationMessagesModule,
        HighlightModule.forRoot({
            languages: hljsLanguages
        }),
        ToastrModule.forRoot(),
        CheTextareaModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [ToastrModule]
})
export class AppModule {
}
