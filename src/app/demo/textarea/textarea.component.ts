import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
    value;
    textImport = 'import {CheTextareaModule} from \'@fidtech-sa/chemistry-ui\';\n';
    gettingStarter = '  <che-textarea desing="borderless" label="This label" maxlength="50" name="example" [(ngModel)]="value" required="true"> </che-textarea>';
    attribute = [
        {tittle: 'Color:', description: 'Determine the color of the textarea'},
        {tittle: 'Label:', description: 'Determine the text of the textarea'},
        {tittle: 'Placeholder:', description: 'Determine the text inside textarea, only in textarea with border'},
        {tittle: 'required:', description: 'Determine if textarea is require'},
        {tittle: 'Desing:', description: 'Determine desing of textarea, "borderless or border"'},
        {tittle: 'Disabled:', description: 'Disable the textarea'},
        {tittle: 'readonly:', description: 'textarea readonly'},

    ];
    codeHtml = '<!-- textarea Borderless -->\n' +
        '<che-textarea desing="borderless" label="This label" maxlength="50" name="example" [(ngModel)]="value" required="true"> </che-textarea>\n' +
        '<!-- textarea with border -->\n' +
        '<che-textarea desing="border" label="This label" maxlength="50" name="example" [(ngModel)]="value" required="true"> </che-textarea>\n';

    codeTs = '<!-- This component has no extra functions in typescript -->';
    codeScss = '<!-- This component has no extra functions in scss -->';

    constructor() {
    }

    ngOnInit() {
    }

}
