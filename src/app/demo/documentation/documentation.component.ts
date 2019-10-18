import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
    @Input() import;
    @Input() gettingStarter;
    @Input() attribute;
    @Input() codeHtml;
    @Input() codeTs;
    @Input() codeScss;
    severityButtons = false;
    documentation = true;
    lenguage = 'html';
    buttons = '<!-- Severity Buttons -->\n' +
        '<che-button color=\'primary\' label="Primary"></che-button>\n' +
        '<che-button color=\'secondary\' label="Secondary"></che-button>\n' +
        '<che-button color=\'success\' label="Success"></che-button>\n' +
        '<che-button color=\'warning\' label="Warning"></che-button>\n' +
        '<che-button color=\'danger\' label="Danger"></che-button>\n' +
        '<che-button color=\'info\' label="Info"></che-button>\n' +
        '<che-button color=\'dark\' label="Dark"></che-button>\n' +
        '<che-button color=\'ligth\' label="Ligth"></che-button>\n' +
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

    copyText(val: string){
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

}
