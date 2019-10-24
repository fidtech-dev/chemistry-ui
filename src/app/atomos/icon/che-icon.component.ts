import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'che-icon',
    templateUrl: './che-icon.component.html',
    styleUrls: ['./che-icon.component.scss']
})
export class CheIconComponent implements OnInit {
    @Input() type;
    @Input() icon;

    constructor() {
    }

    ngOnInit() {
        if (this.type === 'ligth') {
            this.type = 'ftl';
        }
    }

}
