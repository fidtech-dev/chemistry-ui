import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CheButtonComponent} from './che-button.component';
import {Component, Provider, Type} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import * as $ from 'jquery';

describe('che-button Component', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
        // Arrange

        fixture = createComponent(CheButtonF1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });
    it('should have an effect when is clicked', () => {
        // Act

        const button = fixture.debugElement.query(By.css('button'))!;
        const span = fixture.debugElement.query(By.css('span'))!;

        expect(span).toBeNull('Should to have not the class che-ripple');

        expect(button.nativeElement.classList.contains('che-ripple')).toBeFalsy('Should to have not the class che-ripple');
        button.nativeElement.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        $('button').trigger('click');
        expect(button.nativeElement.classList.contains('che-ripple')).toBeTruthy('Should to havethe class che-ripple');
        expect(span).toBeDefined('Should to have not the class che-ripple');


    });
    // fixture 1
    describe('If it is outline', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
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
        describe('if it has color', () => {

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
        describe('if it has no color', () => {

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
    describe('If it has no outline', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
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
        describe('if it has no color', () => {
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
    describe('If it is disabled', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
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
    describe('If it has size', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
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

    // fixture 6
    describe('If it change the size', () => {

        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheButtonF6Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('should change attribute size from "sm" to "lg"', () => {
            // Act
            const button = fixture.debugElement.query(By.css('button'))!;
            const cheButton = fixture.debugElement.query(By.css('che-button'))!;
            expect(button.nativeElement.classList.contains('btn-sm')).toBeTruthy('Should to have the class btn-sm');
            component.size = 'lg';
            fixture.detectChanges();
            expect(button.nativeElement.classList.contains('btn-lg')).toBeTruthy('Should to have the class btn-lg');

        });


    });


    describe('If it has no size ', () => {


        beforeEach(() => {
            // Arrange

            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheButtonF1Component);
            fixture.detectChanges();
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
        <che-button [size]="size"></che-button>`
})
class CheButtonF6Component {
    public size = 'sm';
}



