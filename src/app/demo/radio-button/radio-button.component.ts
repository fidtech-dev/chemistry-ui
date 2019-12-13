import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.html',
    styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
    value;
    value2 = 'value2';
    textImport = 'import {CheRadioButtonModule} from \'@fidtech-sa/chemistry-ui\';\n';
    gettingStarter = '    <che-radio-button color="primary" label=\'this is a label\' name="grupo1"  [(ngModel)]="value" value="valor1"   ></che-radio-button>\n' +
        '            <che-radio-button color="primary" label=\'this is a label\' name="grupo1" [(ngModel)]="value" value="valor2" ></che-radio-button>';
    attribute = [
        {tittle: 'Color:', description: 'determine the color of the radio button'},
        {tittle: 'Label:', description: 'determine the text of the radio button'},
        {tittle: 'Disabled:', description: 'disable the radio button'}
    ];
  codeTs = '<!-- This component has no extra functions in typescript -->';
  codeScss = '<!-- This component has no extra functions in scss -->';

  codeHtml = '<!-- Radio button normal -->\n' +
      '    <che-radio-button color="primary" label=\'this is a label\' name="grupo1"  [(ngModel)]="value" value="valor1"   ></che-radio-button>\n' +
      '            <che-radio-button color="primary" label=\'this is a label\' name="grupo1" [(ngModel)]="value" value="valor2" ></che-radio-button>\n' +
      '<!-- Radio button disabled -->\n' +
      '            <che-radio-button color="primary" label=\'this is a label disabled\' name="grupo2"  disabled="true"  [(ngModel)]="value2" value="valor1"  ></che-radio-button>\n' +
      '            <che-radio-button color="primary" label=\'this is a label disabled\' name="grupo2" disabled="true"  [(ngModel)]="value2" value="value2" ></che-radio-button>\n' ;
    radioForm: FormGroup;
    constructor() {
      this.radioForm = new FormGroup({
        // tslint:disable-next-line
        radioButton: new FormControl(null, Validators.required),
      });
    }

    ngOnInit() {
    }


}
