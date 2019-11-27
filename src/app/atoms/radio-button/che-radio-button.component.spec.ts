import {async, ComponentFixture, flush, TestBed, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {Component, Provider, Type} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CheRadioButtonComponent} from './che-radio-button.component';
import * as $ from 'jquery';
describe('che-radio-button Component', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
        // Arrange
        fixture = createComponent(CheRadioButtonF1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // test 1
    it('should have a class "che-focus" when is focused', () => {
        // Arrange
        const radioButton = fixture.debugElement.query(By.css('input'))!;
        // Assert
        expect(radioButton.nativeElement.classList.contains('che-focus')).toBeFalsy('Should have not class "che-focus"');
        // Act
        radioButton.triggerEventHandler('focus', null);
        fixture.detectChanges();
        // Assert
        expect(radioButton.nativeElement.classList.contains('che-focus')).toBeTruthy('Should have class "che-focus"');
    });

    // test 2
    it('should have not a class "che-focus" when is focused', () => {

        // Arrange
        let radioButton = fixture.debugElement.query(By.css('input'))!;
        // Assert
        expect(radioButton.nativeElement.classList.contains('che-focus')).toBeFalsy('Should have not class "che-focus"');
        // Act
        radioButton.triggerEventHandler('focus', null);
        fixture.detectChanges();
        // Assert
        expect(radioButton.nativeElement.classList.contains('che-focus')).toBeTruthy('Should have class "che-focus"');

        // Act
        radioButton.triggerEventHandler('blur', null);
        fixture.detectChanges();
        // Assert
        expect(radioButton.nativeElement.classList.contains('che-focus')).toBeFalsy('Should have not class "che-focus"');
    });

    // test 3
    describe('If the radio button has a color', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheRadioButtonF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        // test 1
        it('Should have a bg color attribute set ', () => {
            // Arrange
            let label = fixture.debugElement.query(By.css('span'))!;
            // Act
            // Assert
            expect(label.nativeElement.classList.contains('che-bg-warning')).toBeTruthy('Should have the class che-bg-warning');

        });


    });

    // test 4
    describe('If the radio button has not color', () => {


        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheRadioButtonF2Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have class "bg-primary" for default', () => {
            // Arrange
            const label = fixture.debugElement.query(By.css('span'))!;

            // Act

            // Assert
            expect(label.nativeElement.classList.contains('che-bg-primary')).toBeTruthy('Should have class "che-bg-primary"');

        });


    });

    // test 5
    describe('If the radio button has a label', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheRadioButtonF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have a label attribute', () => {
            // Arrange
            const radioButton = fixture.debugElement.query(By.css('che-radio-button'))!;
            // Act

            // Assert
            expect(radioButton.nativeElement.getAttribute('label')).toEqual('this is a label');

        });


    });

    // test 6
    describe('If the radio button is disabled', () => {


        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheRadioButtonF3Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have the attribute disabled', () => {
            // Arrange
            let radioButton = fixture.debugElement.query(By.css('che-radio-button'))!;
            // Act

            // Assert
            expect(radioButton.nativeElement.getAttribute('disabled')).toBeTruthy('Should have attribute attribute disabled');

        });


        it('should not change classes by clicking', () => {
            // Arrange
            const radioButton = fixture.debugElement.query(By.css('che-radio-button'))!;
            const classAfterClick = radioButton.nativeElement.classList;

            // Act
            radioButton.nativeElement.dispatchEvent(new Event('change'));

            // Assert
            expect(classAfterClick).toEqual(radioButton.nativeElement.classList);
            expect(radioButton.nativeElement.getAttribute('disabled')).toBeTruthy('Should have attribute attribute disabled');

        });


    });

    // test 7
    describe('If the radio button is unchecked', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheRadioButtonF5Component);
            component = fixture.debugElement.componentInstance;
            fixture.detectChanges();

        });


        it('should change from unchecked to marked and from transparent bg to bg color when click it.', () => {
            // Arrange
            let radioButton = fixture.debugElement.query(By.css('input'))!;
            let style = window.getComputedStyle(radioButton.nativeElement, null);
            // Assert

            expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
            expect(radioButton.nativeElement.classList.contains('che-radio-button-checked')).toBeFalsy('Should have not the class: "che-radio-button-checked"');
            // Act


            $('label').trigger('click');
            fixture.detectChanges();
            console.log(radioButton.nativeElement);
            // Assert
            expect(radioButton.nativeElement.classList.contains('che-radio-button-checked')).toBeTruthy('Should have the class: "che-radio-button-checked"');


        });


    });


});


function createComponent<T>(component: Type<T>,
                            providers: Provider[] = [],
                            imports: any[] = [],
                            declarations: any[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            ...imports
        ],
        declarations: [CheRadioButtonComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}


// fixture 1
@Component({
    template: `
        <che-radio-button color="warning" label='this is a label'></che-radio-button>`
})
class CheRadioButtonF1Component {
}


// fixture 2
@Component({
    template: `
        <che-radio-button label='this is a label' required="true"></che-radio-button>`
})
class CheRadioButtonF2Component {
}


// fixture 3
@Component({
    template: `
        <che-radio-button label='this is a label' disabled="true"></che-radio-button>`
})
class CheRadioButtonF3Component {
}

// fixture 4
@Component({
    template: `
        <che-radio-button label='this is a label' disabled="true"></che-radio-button>`
})
class CheRadioButtonF4Component {
}

@Component({
    template: `
        <che-radio-button [(ngModel)]="value" value="pepe" label="radio 1" name="pepe"></che-radio-button>`
})
class CheRadioButtonF5Component {
    public value: boolean = false;
}
