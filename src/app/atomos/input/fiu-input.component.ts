import {Component, ContentChild, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {noop} from 'rxjs';

@Component({
    selector: 'fiu-input',
    templateUrl: './fiu-input.component.html',
    styleUrls: ['./fiu-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FiuInputComponent),
            multi: true
        }
    ],
})
export class FiuInputComponent implements ControlValueAccessor {
    @Input() color = 'primary';
    @Input() label;
    @Input() desing;
    @Input() size;
    @Input() disabled;
    @Input() placeholder;
    @Input() required = false;
    @ContentChild(NgControl, {static: false}) public control: any;
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
        this.onTouchedCallback();
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

    hasDanger() {
        return (this.control as any).name && (this.control.dirty || this.control.touched) && !this.control.valid;
    }
}
