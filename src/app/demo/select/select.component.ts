import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    value;
    valueMultiple;
    valueSearch;
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];

    textImport = 'import {CheSelectModule} from \'@fidtech-sa/chemistry-ui\';\n';
    gettingStarter = '<che-input color=\'primary\' [(ngModel)]="input1" name="example" #example=\'ngModel\' \n' +
        ' label="name" desing="borderless" required="true"></che-input>';
    attribute = [
        {tittle: 'label:', description: 'Determine the text of the label'},
        {tittle: 'disabled:', description: 'disable select'},
        {tittle: 'items:', description: 'Items array'},
        {tittle: 'searchable:', description: 'Allow to search for value'},
        {tittle: 'multiple:', description: 'Allows to select multiple items'},
        {tittle: 'desing:', description: 'Allows to select dropdown appearance.'},
        {tittle: 'required:', description: 'Determine if select is require'},

    ];

    codeHtml = '<!-- select simple -->\n' +
        '            <che-select class="w-100" class="w-100" desing="border" bindLabel="name" label="Select with border"\n' +
        '                        [(ngModel)]="value" [items]="items"\n' +
        '                        [searchable]="false" [multiple]="false"></che-select>\n' +
        '            <che-select class="w-100" class="w-100" desing="borderless" bindLabel="name" label="Select borderless"\n' +
        '                        [(ngModel)]="value" [items]="items"\n' +
        '                        [searchable]="false" [multiple]="false"></che-select>\n' +
        '<!-- select multiple -->\n' +
        '            <che-select class="w-100" class="w-100" desing="border" bindLabel="name" label="Select with border"\n' +
        '                        [(ngModel)]="valueMultiple" [items]="items"\n' +
        '                        [searchable]="false" [multiple]="true"></che-select>\n' +
        '            <che-select class="w-100" class="w-100" desing="borderless" bindLabel="name" label="Select borderless"\n' +
        '                        [(ngModel)]="valueMultiple" [items]="items"\n' +
        '                        [searchable]="false" [multiple]="true"></che-select>\n' +
        '<!-- select searchable -->\n' +
        '            <che-select class="w-100" class="w-100" desing="border" bindLabel="name" label="Select with border"\n' +
        '                        [(ngModel)]="valueSearch" [items]="items"\n' +
        '                        [searchable]="true" [multiple]="true"></che-select>\n' +
        '            <che-select class="w-100" class="w-100" desing="borderless" bindLabel="name" label="Select borderless"\n' +
        '                        [(ngModel)]="valueSearch" [items]="items"\n' +
        '                        [searchable]="true" [multiple]="true"></che-select>';

    codeTs = '<!-- This component has no extra functions in typescript -->';
    codeScss = '<!-- This component has no extra functions in scss -->';

    constructor() {
    }

    ngOnInit() {
    }

}
