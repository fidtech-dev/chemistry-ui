import {Component, OnInit, Input, forwardRef, Output, EventEmitter} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel} from '@angular/forms';


const noop = () => {
};

@Component({
    selector: 'che-checkbox',
    templateUrl: './che-checkbox.component.html',
    styleUrls: ['./che-checkbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheCheckboxComponent),
            multi: true
        }
    ],
})

export class CheCheckboxComponent implements ControlValueAccessor {
    @Input() color = 'primary';
    @Input() label = '';
    @Input() disabled;
    @Input() checked;
    @Output() focus = new EventEmitter();
    public clicked = false;
    public fucused = false;
    /**
     * @description The internal data model
     */
    private innerValue: any = '';


    /**
     * @description Placeholders for the callbacks which are later providesd by the Control Value Accessor
     */
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    /**
     * @description get accessor
     */
    get value(): any {
        return this.innerValue;
    };

    /**
     * @description set accessor including call the onchange callback
     */
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    /**
     * @description Set touched on blur
     */
    onBlur() {
        this.fucused = false;
        this.onTouchedCallback();

    }

    onClick() {
        if (this.clicked) {
            this.clicked = false;
        } else {
            this.clicked = true;
        }
    }

    public onFocus() {
        console.log('Esta enfocando..');
        this.fucused = true;
        this.focus.emit();
    }

    /**
     * @description From ControlValueAccessor interface
     */
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }


    /**
     * @description From ControlValueAccessor interface
     */
    registerOnChange(fn: any) {

        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }



}
