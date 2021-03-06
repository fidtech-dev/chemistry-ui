import {Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {noop} from 'rxjs';

@Component({
    selector: 'che-textarea',
    templateUrl: './che-textarea.component.html',
    styleUrls: ['./che-textarea.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheTextareaComponent),
            multi: true
        }
    ],
})
export class CheTextareaComponent implements ControlValueAccessor, OnInit {
    @Input() color = 'primary';
    @Input() label;
    @Input() desing = 'border';
    @Input() disabled = false;
    @Input() placeholder = '';
    @Input() maxlength;
    @Input() name;
    @Input() required = false;
    @Input() readonly = false;
    @Output() focus = new EventEmitter();
    public fucused = false;
    @Output() focusout = new EventEmitter();
    @Output() blur = new EventEmitter();
    @ContentChild(NgControl, {static: false}) public control: any;


    constructor() {

    }

    ngOnInit() {
        if (this.readonly) {
            this.color = 'transparent';

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
        this.fucused = false;
        this.blur.emit();
    }

    public onFocus() {
        this.fucused = true;
        this.focus.emit();
    }

    public onFocusout() {
        this.focusout.emit();
    }

    /**
     * @description From ControlValueAccessor interface
     */
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value === undefined ? '' : value;
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

    /**
     * @description Function that returns if the input is invalid
     */
    hasDanger() {
        return this.control && (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }
}
