import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

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

    constructor(private toastr: ToastrService) {
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
        this.toastr.info('The information was copied', 'Copied!');
    }

}
