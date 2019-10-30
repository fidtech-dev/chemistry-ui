import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    severityButtons = false;
    documentation = true;
    lenguage = 'html';
    textImport = 'import {CheButtonModule} from \'@fidtech-sa/chemistry-ui\'';
    gettingStarter = '<che-button color="primary" label="Primary"></che-button>';
    attribute = [
        {tittle: 'Color:', description: 'determine the color of the button'},
        {tittle: 'Label:', description: 'determine the text of the button'},
        {tittle: 'Outline:', description: ''},
        {tittle: 'Size:', description: 'determine the text of the button, accept "lg,sm,block"'},
        {tittle: 'Disabled:', description: 'disable the button'}
    ];
    codeHtml = '<!-- Severity Buttons -->\n' +
        '<che-button color=\'primary\' label="Primary"></che-button>\n' +
        '<che-button color=\'secondary\' label="Secondary"></che-button>\n' +
        '<che-button color=\'success\' label="Success"></che-button>\n' +
        '<che-button color=\'warning\' label="Warning"></che-button>\n' +
        '<che-button color=\'danger\' label="Danger"></che-button>\n' +
        '<che-button color=\'info\' label="Info"></che-button>\n' +
        '<che-button color=\'dark\' label="Dark"></che-button>\n' +
        '<che-button color=\'ligth\' label="Ligth"></che-button>\n' +
        '\n' +
        '<che-button color=\'primary\' label="Primary">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'secondary\' label="Secondary">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'success\' label="Success">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'warning\' label="Warning">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'danger\' label="Danger">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'info\' label="Info">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'dark\' label="Dark">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>\n' +
        '<che-button color=\'ligth\' label="Ligth">\n' +
        '     <che-icon type="ligth" icon="user"></che-icon>\n' +
        '</che-button>' +
        '\n' +
        '<!-- Severity Buttons Outline-->\n' +
        '<che-button color=\'primary\' [outline]="true" label="Primary"></che-button>\n' +
        '<che-button color=\'secondary\' [outline]="true" label="Secondary"></che-button>\n' +
        '<che-button color=\'success\' [outline]="true" label="Success"></che-button>\n' +
        '<che-button color=\'warning\' [outline]="true" label="Warning"></che-button>\n' +
        '<che-button color=\'danger\' [outline]="true" label="Danger"></che-button>\n' +
        '<che-button color=\'info\' [outline]="true" label="Info"></che-button>\n' +
        '<che-button color=\'dark\' [outline]="true" label="Dark"></che-button>\n' +
        '<che-button color=\'ligth\' [outline]="true" label="Ligth"></che-button>\n' +
        '\n' +
        '<!-- Buttons Sizes-->\n' +
        '<che-button color=\'primary\' size="sm" label="Size Small"></che-button>\n' +
        '<che-button color=\'secondary\' size="lg" label="Size Large"></che-button>\n' +
        '\n' +
        '<!-- Buttons Disabled-->\n' +
        '<che-button color=\'primary\' label="Primary" disabled="true"></che-button>\n' +
        '<che-button color=\'secondary\' label="Secondary" [outline]="true" disabled="true"></che-button>';
    codeTs = '<!-- This component has no extra functions in typescript -->';
    codeScss = '<!-- This component has no extra functions in scss -->';

    constructor() {
    }

    ngOnInit() {
    }

    showCode(param) {
        if (param === 'severityButtons') {
            if (this.severityButtons) {
                this.severityButtons = false;
            } else {
                this.severityButtons = true;
            }
        }
    }

    changeTab(param) {
        this.documentation = param;
    }

    changeTabLenguage(param) {
        this.lenguage = param;
    }

}
