import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    input1;
    input2;
    value;
    userForm;
    textImport = 'import {CheInputModule} from \'@fidtech-sa/chemistry-ui\';\n';
    gettingStarter = '<che-input color=\'primary\' [(ngModel)]="input1" name="example" #example=\'ngModel\' \n' +
        ' label="name" desing="borderless" required="true"></che-input>';
    attribute = [
        {tittle: 'Color:', description: 'Determine the color of the button'},
        {tittle: 'Label:', description: 'Determine the text of the button'},
        {tittle: 'Placeholder:', description: 'Determine the text inside input'},
        {tittle: 'required:', description: 'Determine if input is require'},
        {tittle: 'Desing:', description: 'Determine desing of input, "borderless or border"'},
        {tittle: 'Disabled:', description: 'Disable the Input'},
        {tittle: 'readonly:', description: 'Input readonly'},
        {tittle: 'type:', description: 'type of input, "text,number,password"'}

    ];

    codeHtml = '<!-- Input Borderless -->\n' +
        '<che-input color=\'primary\' [(ngModel)]="input1" name="example" #example=\'ngModel\' label="name" desing="borderless" required="true"></che-input>\n' +
        '<!-- che-validation-message -->\n' +
        '<fiu-validation-message messege="Value required" *ngIf="example.touched && example.errors && example.errors.required"></fiu-validation-message>\n' +
        '<!-- Input with border -->\n' +
        '<che-input color=\'primary\' [(ngModel)]="input1" name="example" #example=\'ngModel\' label="name" desing="border" required="true"></che-input>\n';
    codeTs = '<!-- This component has no extra functions in typescript -->';
    codeScss = '<!-- This component has no extra functions in scss -->';

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {

        this.userForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[\' A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ.-]*')]],

        });
    }

    pruebaFocus(){
        console.log('focus')
    }

    prueba(){
        console.log('blur')
    }

    pruebaChange(){
        console.log("change");
    }

}
