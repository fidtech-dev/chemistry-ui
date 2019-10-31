import {Component, Input, OnInit} from '@angular/core';
import {icons} from '@fidtech-sa/ft-icons/icons';
import {ToastrService} from 'ngx-toastr';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }

        console.log(filter);
        return items.filter((item: any) =>
            ((item.ligadura) ? (item.ligadura.trim().toUpperCase().search((filter as any).toUpperCase()) > -1) : ''));
    }
}

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
    listIcon = icons;
    textFilter = '';
    import = 'import {CheIconModule} from \'./atoms/icon/che-icon.module\';';
    gettingStarter = '<che-icon type="ligth" icon="user"></che-icon>';
    codeInstall = 'npm i @fidtech-sa/ft-icons';
    codeAngularJson = '  "styles": [\n' +
        '              "...",\n' +
        '              "node_modules/@fidtech-sa/ft-icons/style.css"\n' +
        '            ]\n' +
        '  "scripts": [\n' +
        '              "...",\n' +
        '              "node_modules/@fidtech-sa/ft-icons/liga.js"\n' +
        '            ],';
    attribute = [
        {tittle: 'Type:', description: 'Determine the type of icon, example: "ligth,bold,fill" '},
        {tittle: 'Icon:', description: 'Determine the icon, example: "user"'},
    ];

    constructor(private toastr: ToastrService) {
    }


    ngOnInit() {

        console.log(icons);
    }

    copyText(val: string, text?) {
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
        let textDefault = 'The information was copied';
        if (text) {
            textDefault = text;
        }
        this.toastr.info(textDefault, 'Copied!');
    }


}
