import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'fidtechUI';

    color = 'primary';
    checkbox = true;
    input1 = '';
    input2;
    userForm;


    constructor(private formBuilder: FormBuilder) {

        this.userForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[\' A-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ.-]*')]],

        });
    }

}
