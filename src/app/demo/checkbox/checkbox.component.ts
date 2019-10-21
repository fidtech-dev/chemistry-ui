import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
    textImport = 'import {CheCheckboxModule} from \'@fidtech-sa/chemistry-ui\';\n';
    gettingStarter = '<che-checkbox [(ngModel)]=\'checkbox\' color="primary"  label=\'this is a checkbox\' ></che-checkbox>\n';
    attribute = [
        {tittle: 'Color:', description: 'determine the color of the button'},
        {tittle: 'Label:', description: 'determine the text of the button'},
        {tittle: 'Disabled:', description: 'disable the checkbox'}
    ];
    codeTs = '<!-- This component has no extra functions in typescript -->';
    codeScss = '<!-- This component has no extra functions in scss -->';

    codeHtml = '<!-- Checkbox normal -->\n' +
        '<che-checkbox [(ngModel)]=\'checkbox\' color="primary"  label=\'this is a checkbox\' ></che-checkbox> <br>\n' +
        '<!-- Checkbox disabled -->\n' +
        '<che-checkbox [(ngModel)]=\'checkboxDisabled\' color="primary"  label=\'this is a checkbox disabled\' disabled="true" ></che-checkbox> <br>\n';

    constructor() {
    }

    ngOnInit() {
    }

}
