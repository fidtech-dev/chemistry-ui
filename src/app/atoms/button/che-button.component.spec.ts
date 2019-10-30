import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheButtonComponent} from './che-button.component';
import {Component, Provider, Type} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import * as $ from 'jquery';

describe('che-button Component', () => {
    // fixture 1
    describe('If  button is outline', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheButtonF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();

        });

        it('should have bg transparent', () => {
            // Arrange
            const button = fixture.debugElement.query(By.css('button'))!;
            const style = window.getComputedStyle(button.nativeElement, ':before');

            // Act

            // Assert
            expect(button.nativeElement.classList.contains('btn-outline-warning')).toBeTruthy('Shold to have the class btn-outline-warning');
            expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
        });
        // fixture 1
        describe('Has color', () => {

            it('should have attribute color', () => {
                // Arrange
                const cheButton = fixture.debugElement.query(By.css('che-button'))!;
                const button = fixture.debugElement.query(By.css('button'))!;

                // Act

                // Assert
                expect(cheButton.nativeElement.getAttribute('color')).toEqual('warning');
                expect(button.nativeElement.classList.contains('btn-outline-warning')).toBeTruthy('Shold to have the class btn-outline-warning');

            });
        });

        // fixture 3
        describe('Has no color', () => {

            beforeEach(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheButtonF3Component);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
            it('should have class btn-outline-primary for default', () => {
                // Arrange
                const cheButton = fixture.debugElement.query(By.css('che-button'))!;
                const button = fixture.debugElement.query(By.css('button'))!;

                // Act

                // Assert
                expect(cheButton.nativeElement.getAttribute('color')).toEqual(null);
                expect(button.nativeElement.classList.contains('btn-outline-primary')).toBeTruthy('Shold to have the class che-outline-primary');


            });


        });


    });


    // fixture 2
    describe('If a button isnt outline', () => {
        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheButtonF2Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        describe('Has color', () => {
            it('should have bg color', () => {
                // Arrange
                const cheButton = fixture.debugElement.query(By.css('che-button'))!;
                const button = fixture.debugElement.query(By.css('button'))!;

                // Act

                // Assert
                expect(cheButton.nativeElement.getAttribute('color')).toEqual('primary');
                expect(button.nativeElement.classList.contains('btn-primary')).toBeTruthy('Shold to have the class btn-primary');


            });
        });

        // fixture 4
        describe('Has no color', () => {
            beforeEach(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheButtonF4Component);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
            it('should have bg color with value "primary" for default', () => {
                // Arrange
                const button = fixture.debugElement.query(By.css('button'))!;

                // Act

                // Assert
                expect(button.nativeElement.classList.contains('btn-primary')).toBeTruthy('Should to have the class che-primary');
            });


        });

    });


    // fixture 5
    describe('If a button is disabled', () => {
        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheButtonF5Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should have attribute disabled', () => {
            // Act
            const button = fixture.debugElement.query(By.css('button'))!;
            expect(button.nativeElement.getAttribute('disabled')).toBeDefined('should be defined the attribute disabled');
        });


    });

    // fixture 6
    describe('If a button with size', () => {
        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheButtonF6Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should have attribute size with value "sm"', () => {
            // Act
            const button = fixture.debugElement.query(By.css('button'))!;
            expect(button.nativeElement.classList.contains('btn-sm')).toBeTruthy('Should to have the class btn-sm');
        });


    });


    describe('If is a button without size ', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheButtonF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();

        });


        it('should have not attribute size', () => {
            // Act
            const button = fixture.debugElement.query(By.css('button'))!;
            expect(button.nativeElement.classList.contains('btn-sm')).toBeFalsy('Should have not a size class');
            expect(button.nativeElement.classList.contains('btn-lg')).toBeFalsy('Should have not a size class');

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
        declarations: [CheButtonComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}

// fixture 1
@Component({
    template: `
        <che-button outline="true" color="warning"></che-button>`
})
class CheButtonF1Component {
}

// fixture 2
@Component({
    template: `
        <che-button color="primary"></che-button>`
})
class CheButtonF2Component {
}


// fixture 3
@Component({
    template: `
        <che-button outline="true"></che-button>`
})
class CheButtonF3Component {
}

// fixture 4
@Component({
    template: `
        <che-button></che-button>`
})
class CheButtonF4Component {
}

// fixture 5
@Component({
    template: `
        <che-button disabled="true"></che-button>`
})
class CheButtonF5Component {
}


// fixture 5
@Component({
    template: `
        <che-button size="sm"></che-button>`
})
class CheButtonF6Component {
}



