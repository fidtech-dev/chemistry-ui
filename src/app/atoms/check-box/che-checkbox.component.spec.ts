import {async, ComponentFixture, flush, TestBed, tick} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {Component, Provider, Type} from '@angular/core';
import {CheCheckboxComponent} from './che-checkbox.component';
import {By} from '@angular/platform-browser';
import {CheInputComponent} from '../input/che-input.component';

describe('che-checkbox Component', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
        // Arrange
        fixture = createComponent(CheCheckboxF1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // test 1
    it('should have a circle behind the checkbox when is focused', () => {
        // Arrange
        let checkbox = fixture.debugElement.query(By.css('input'))!;
        // Assert
        expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeFalsy('Should have not class "che-checkbox-focused"');
        // Act
        checkbox.triggerEventHandler('focus', null);
        fixture.detectChanges();
        // Assert
        expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeTruthy('Should have class "che-checkbox-focused"');
    });

    // test 2
    it('should have no a circle behind the checkbox when lose focus', () => {

        // Arrange
        let checkbox = fixture.debugElement.query(By.css('input'))!;
        // Assert
        expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeFalsy('Should havent class "che-checkbox-focused"');
        // Act
        checkbox.triggerEventHandler('focus', null);
        fixture.detectChanges();
        // Assert
        expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeTruthy('Should have class "che-checkbox-focused"');

        // Act
        checkbox.triggerEventHandler('blur', null);
        fixture.detectChanges();
        // Assert
        expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeFalsy('Should havent class "che-checkbox-focused"');
    });

    // test 3
    describe('If it has a color', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        // test 1
        it('Should have a bg color set in the attribute', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('input'))!;
            // Act

            // Assert
            expect(checkbox.nativeElement.classList.contains('che-bg-warning')).toBeTruthy('Should to have the class che-bg-warning');

        });


    });

    // test 4
    describe('If it has no color', () => {


        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF2Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have class "bg-primary" for default', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('input'))!;

            // Act

            // Assert
            expect(checkbox.nativeElement.classList.contains('che-bg-primary')).toBeTruthy('Should have class "che-bg-primary"');

        });


    });

    // test 5
    describe('If it has a label', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have a label attribute', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('che-checkbox'))!;
            // Act

            // Assert
            expect(checkbox.nativeElement.getAttribute('label')).toEqual('this is a label');

        });


    });

    // test 6
    describe('If it is disabled', () => {


        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF3Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have attribute disabled', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('che-checkbox'))!;
            // Act

            // Assert
            expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have attribute attribute disabled');

        });


        it('should not change classes by clicking', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('che-checkbox'))!;
            let classAfterClick = checkbox.nativeElement.classList;

            // Act
            checkbox.nativeElement.dispatchEvent(new Event('change'));

            // Assert
            expect(classAfterClick).toEqual(checkbox.nativeElement.classList);
            expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have attribute attribute disabled');

        });


    });

    // test 7
    describe('If it is unchecked', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF4Component);
            component = fixture.debugElement.componentInstance;
            fixture.detectChanges();

        });


        it('should change from unchecked to marked and transparent bg to bg color to click.', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('input'))!;
            let style = window.getComputedStyle(checkbox.nativeElement, null);
            // Assert

            expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
            expect(checkbox.nativeElement.classList.contains('che-checkbox-checked')).toBeFalsy('Should have not class "che-checkbox-checked"');
            // Act

            component.isChecked = true;
            fixture.detectChanges();
            checkbox.nativeElement.dispatchEvent(new Event('change'));
            fixture.detectChanges();
            // Assert
            expect(checkbox.nativeElement.classList.contains('che-checkbox-checked')).toBeTruthy('Should have class "che-checkbox-checked"');

        });


    });

    // test 8
    describe('If it is checked ', () => {


        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheCheckboxF4Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('should change from checked to unchecked and  bg color to transparent bg to click.', () => {
            // Arrange
            let checkbox = fixture.debugElement.query(By.css('input'))!;

            // Act
            component.isChecked = true;
            fixture.detectChanges();
            checkbox.nativeElement.dispatchEvent(new Event('change'));
            fixture.detectChanges();

            // Assert
            expect(checkbox.nativeElement.classList.contains('che-checkbox-checked')).toBeTruthy('Should have class "che-checkbox-checked"');
            // Act
            component.isChecked = false;
            fixture.detectChanges();
            checkbox.nativeElement.dispatchEvent(new Event('change'));
            fixture.detectChanges();

            // Arrange
            let style = window.getComputedStyle(checkbox.nativeElement, null);
            // Assert
            expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
            expect(checkbox.nativeElement.classList.contains('che-checkbox-checked')).toBeFalsy('Should have not class "che-checkbox-checked"');

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
        declarations: [CheCheckboxComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}


// fixture 1
@Component({
    template: `
        <che-checkbox color="warning" label='this is a label'></che-checkbox>`
})
class CheCheckboxF1Component {
}


// fixture 2
@Component({
    template: `
        <che-checkbox></che-checkbox>`
})
class CheCheckboxF2Component {
}


// fixture 3
@Component({
    template: `
        <che-checkbox disabled="true"></che-checkbox>`
})
class CheCheckboxF3Component {
}

// fixture 4
@Component({
    template: `
        <che-checkbox [(ngModel)]="value" [checked]="isChecked" color="primary"></che-checkbox>`
})
class CheCheckboxF4Component {
    public isChecked: boolean = false;
    public value: boolean = false;
}
