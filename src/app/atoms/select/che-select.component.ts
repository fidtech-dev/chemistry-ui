import {Component, Input, OnInit,forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {noop} from 'rxjs';
@Component({
    selector: 'che-select',
    templateUrl: './che-select.component.html',
    styleUrls: ['./che-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheSelectComponent),
            multi: true
        }
    ],
})
export class CheSelectComponent implements ControlValueAccessor, OnInit {
    @Input() items;
    @Input() loading;
    @Input() searchable = false
    @Input() multiple = false
    @Input() desing = 'borderless'
    @Input() name;
    @Input() label;
    @Input()  disabled
    public appearance;

    constructor() {
    }

    ngOnInit() {
        if (this.desing === 'borderless') {
            this.appearance = 'underline';
        } else {
            this.appearance = 'outline';
        }
    }


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

    onInput(value: string) {
        this.innerValue = value;
        this.onTouchedCallback();
        this.onChangeCallback(this.innerValue);
    }

    /**
     * @description Set touched on blur
     */
    onBlur() {
        this.onTouchedCallback();

    }

    public onFocus() {

    }

    public onFocusout() {
    }

    /**
     * @description From ControlValueAccessor interface
     */
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value === undefined ? null : value;
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
