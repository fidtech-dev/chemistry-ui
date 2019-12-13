import {Component, ContentChild, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';

const noop = () => {
};

@Component({
    selector: 'che-radio-button',
    templateUrl: './che-radio-button.component.html',
    styleUrls: ['./che-radio-button.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheRadioButtonComponent),
            multi: true
        }
    ],
})
export class CheRadioButtonComponent implements ControlValueAccessor {
    @Input() color = 'primary';
    @Input() label = '';
    @Input() disabled;
    @Input() name;
    @Input() required;
    @Input() checked = false;
    @Output() focus = new EventEmitter();
    public clicked = false;
    public fucused = false;
    @Input() value;
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
     * @description Set touched on blur
     */
    onBlur() {
        this.fucused = false;
        this.onTouchedCallback();

    }

    onInput(value: string) {
        this.value = value;
        this.innerValue = value;
        this.onTouchedCallback();
        this.onChangeCallback(this.innerValue);
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

    hasDanger() {
        if ((this.control as any)._parent) {
            return (this.control as any)._parent.submitted && !this.control.dirty;

        }
    }
}

