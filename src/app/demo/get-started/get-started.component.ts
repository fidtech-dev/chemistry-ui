import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
    codeInstall = 'npm i @fidtech-sa/chemistry-ui';
    codeAngularJson = '  "styles": [\n' +
        '              "...",\n' +
        '              "node_modules/@fidtech-sa/chemistry-ui/styles.scss"\n' +
        '            ],';
    codeVariables = '@import "~bootstrap/scss/functions";\n' +
        '@import "~bootstrap/scss/variables";\n' +
        '\n' +
        '$theme-colors: (\n' +
        '        "primary": $primary,\n' +
        '        "secondary": $secondary,\n' +
        '        "success": $success,\n' +
        '        "info": $info,\n' +
        '        "warning": $warning,\n' +
        '        "danger": $danger,\n' +
        '        "light": $light,\n' +
        '        "dark": $dark\n' +
        ');\n' +
        '\n' +
        '@import "~bootstrap/scss/bootstrap";';

    constructor(private toastr: ToastrService) {
    }

    ngOnInit() {
    }


    copyText(val: string) {
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
        this.toastr.info('The information was copied', 'Copied!');
    }

}
