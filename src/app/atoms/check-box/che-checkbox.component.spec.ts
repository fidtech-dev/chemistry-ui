import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {Component, Provider, Type} from '@angular/core';
import {CheCheckboxComponent} from './che-checkbox.component';
import {By} from '@angular/platform-browser';
import {CheInputComponent} from '../input/che-input.component';

describe('che-checkbox Component', () => {
    describe('If is a checkbox with color', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheCheckboxF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        // test 1
        it('Should have a bg color set in the attribute', () => {
            // Act
            let checkbox = fixture.debugElement.query(By.css('input'))!;
            // Assert
            expect(checkbox.nativeElement.classList.contains('che-bg-warning')).toBeTruthy('Should to have the class che-bg-warning');

        });


    });

  describe('If is a checkbox without color', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
      // Arrange
      fixture = createComponent(CheCheckboxF2Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    it('Should have class "bg-primary" for default', () => {
      // Act
      let checkbox = fixture.debugElement.query(By.css('input'))!;
      // Assert
      expect(checkbox.nativeElement.classList.contains('che-bg-primary')).toBeTruthy('Should have class "che-bg-primary"');

    });


  });



  describe('If is a checkbox with label', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheCheckboxF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have a label attribute', () => {
            // Act
            let checkbox = fixture.debugElement.query(By.css('che-checkbox'))!;
            // Assert
            expect(checkbox.nativeElement.getAttribute('label')).toEqual('this is a label');

        });


    });




    describe('If is a checkbox disabled', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheCheckboxF3Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('Should have attribute disabled', () => {
            // Act
            let checkbox = fixture.debugElement.query(By.css('che-checkbox'))!;
            // Assert
            expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have attribute attribute disabled');

        });


    });

    describe('If the checkbox is unchecked and clicked', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheCheckboxF4Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('should change from unchecked to marked and transparent bg to bg color', () => {
            // Act
            let checkbox = fixture.debugElement.query(By.css('input'))!;
            // Assert

            // fetch styles for an element
            let style = window.getComputedStyle(checkbox.nativeElement, null);

            // fetch the property values for any style attribute
            console.log(style.getPropertyValue('background-color'));
            expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
            expect(checkbox.nativeElement.classList.contains('che-checkbox-clicked')).toBeFalsy('Should havent class "che-checkbox-clicked"');
            checkbox.triggerEventHandler('click', null);
            fixture.detectChanges();
            expect(checkbox.nativeElement.classList.contains('che-checkbox-clicked')).toBeTruthy('Should have class "che-checkbox-clicked"');
            console.log(style.getPropertyValue('background-color'));
            // 'rgba(0, 0, 0, 0)';
            // console.log(style.getPropertyValue('background-color'));

            // expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have class "bg-primary"');

        });


    });

    describe('If the checkbox is checked and clicked', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheCheckboxF4Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });


        it('should change from checked to unchecked and  bg color to transparent bg', () => {
            // Act
            let checkbox = fixture.debugElement.query(By.css('input'))!;
            // Assert
            checkbox.triggerEventHandler('click', null);
            fixture.detectChanges();
            expect(checkbox.nativeElement.classList.contains('che-checkbox-clicked')).toBeTruthy('Should have class "che-checkbox-clicked"');
            checkbox.triggerEventHandler('click', null);
            fixture.detectChanges();
            expect(checkbox.nativeElement.classList.contains('che-checkbox-clicked')).toBeFalsy('Should havent class "che-checkbox-clicked"');

            // 'rgba(0, 0, 0, 0)';
            // console.log(style.getPropertyValue('background-color'));

            // expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have class "bg-primary"');

        });


    });


  describe('If the checkbox is focused', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
      // Arrange
      fixture = createComponent(CheCheckboxF4Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });


    it('should have a circle behind the checkbox when clicking', () => {
      // Act
      let checkbox = fixture.debugElement.query(By.css('input'))!;
      // Assert
      expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeFalsy('Should havent class "che-checkbox-focused"');
      checkbox.triggerEventHandler('focus', null);
      fixture.detectChanges();
      expect(checkbox.nativeElement.classList.contains('che-checkbox-focused')).toBeTruthy('Should have class "che-checkbox-focused"');


      // 'rgba(0, 0, 0, 0)';
      // console.log(style.getPropertyValue('background-color'));

      // expect(checkbox.nativeElement.getAttribute('disabled')).toBeTruthy('Should have class "bg-primary"');

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
        <che-checkbox color="primary"></che-checkbox>`
})
class CheCheckboxF4Component {
}
