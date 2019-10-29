import {async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import {CheInputComponent} from './che-input.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Component, inject, Provider, Type} from '@angular/core';
// import {FiuInputModule} from './fiu-input.module';


describe('che-Input as a Atomic component', () => {

    describe('If not contain a type defined or is of type text', () => {

        let component: any;
        let fixture: ComponentFixture<any>;

        beforeEach(() => {
            // Arrange
            fixture = createComponent(CheInputF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        // test 1
        it('Should to be of type text', () => {
            // Act
            let input = fixture.debugElement.query(By.css('input'))!;
            // Assert
            expect(input.properties.type).toBe('text');
        });


        describe('If the design is borderless', () => {
            // test2
            it('Should be to have a floating label when input if focused', () => {
                // Act
                let label = fixture.debugElement.query(By.css('label'))!;
                let input = fixture.debugElement.query(By.css('input'))!;

                // Assert
                expect(input.nativeElement.classList.contains('che-input-focus')).toBeFalsy('Shold not to have the class che-input-focus');
                expect(label.nativeElement.classList.contains('che-label-floating')).toBeFalsy('Shold not to have the class che-label-floating');

                input.triggerEventHandler('focus', null);
                fixture.detectChanges();

                expect(input.nativeElement.classList.contains('che-input-focus')).toBeTruthy('Shold to have the class che-input-focus');
                expect(label.nativeElement.classList.contains('che-label-floating')).toBeTruthy('Shold to have the class che-label-floating');

            });

            it('Should be to have a floating label when input have a value', () => {
                // Act
                let label = fixture.debugElement.query(By.css('label'))!;
                let input = fixture.debugElement.query(By.css('input'))!;

                // Assert
                input.nativeElement.ng = 'something';
                fixture.detectChanges();
                console.log(label.nativeElement.classList);

                expect(label.nativeElement.classList.contains('che-label-floating')).toBeTruthy('Shold to have the class che-label-floating');

            });

            // test3
            // it('Should be to the value seted in the input should to have this value', () => {
            //    // AAA (Arrange, Act y Assert) Preparar, actuar y afirmar
            //   // Act
            //   let label = fixture.debugElement.query(By.css('label'))!;
            //   let input = fixture.debugElement.query(By.css('input'))!;
            //
            //   // obtener la class
            //
            //     expect(input.attributes.value).toBeFalsy();
            //
            //   console.log(input.nativeElement.classList);
            //
            //   input.nativeElement.value = 'something';
            //   fixture.detectChanges();
            //
            //   console.log(input.nativeElement.classList);
            //
            //     // Assert
            //   expect(input.attributes.value).toBe('something');
            //
            //
            //
            // });

        });


    });

    // describe('with desing borderless', () => {
    //   it('should to have floating labels', () => {
    //     let fixture = createComponent(FiuInputBorderlessLabelAttrTestComponent);
    //     fixture.detectChanges();
    //
    //     let label = fixture.debugElement.query(By.css('label'));
    //     expect(label.attributes.class).toBe('labelMaterial', 'shoulf to have the class labelMaterial');
    //   });
    //
    //   it('should init with the text "Label"', () => {
    //     let fixture = createComponent(FiuInputBorderlessLabelAttrTestComponent);
    //     fixture.detectChanges();
    //
    //     let label = fixture.debugElement.query(By.css('label'));
    //     expect(label!.nativeElement.textContent).toBe('Label');
    //   });
    // });
    //
    // describe('general cases', () => {
    //
    //   // validar que al setear un texto debe estar validado el campo
    //   it('should to validate when to set a value in the input the field is valid', () => {
    //     let fixture = createComponent(FiuInputTextRequiredTestComponent);
    //     fixture.detectChanges();
    //
    //     let input = fixture.debugElement.query(By.css('input'))!;
    //     let divGroup = fixture.debugElement.query(By.css('.group'))!;
    //
    //     // checking previous state
    //     expect(input.nativeElement.classList.contains('ng-invalid'))
    //       .toBe(true, 'should to be invalid');
    //
    //     expect(input.nativeElement.required)
    //       .toBe(true, 'should be required');
    //
    //     expect(input.nativeElement.classList.contains('ng-touched'))
    //       .toBe(false, 'should to be as untouched');
    //
    //     expect(divGroup.nativeElement.classList.contains('has-danger'))
    //       .toBe(false, 'should be false');
    //
    //     // to make focus over the input
    //     input.triggerEventHandler('focus',null);
    //     input.triggerEventHandler('blur',null);
    //
    //     fixture.detectChanges();
    //
    //     expect(input.nativeElement.classList.contains('ng-touched'))
    //       .toBe(true, 'should to be as touched');
    //
    //     console.log(divGroup.classes);
    //     expect(divGroup.nativeElement.classList.contains('has-danger'))
    //       .toBe(true, 'should to have the class has-danger');
    //   });
    //
    //   // validar que el input tenga el valor seteado
    //   it('should to validate when to set a value in the input this contain the value', () => {
    //     let fixture = createComponent(FiuInputTextRequiredTestComponent);
    //     fixture.detectChanges();
    //
    //     let input = fixture.debugElement.query(By.css('input'))!;
    //     let divGroup = fixture.debugElement.query(By.css('.group'))!;
    //
    //     // checking the input is empty
    //     expect(input.nativeElement.classList.contains('ng-invalid'))
    //       .toBe(true, 'should to be invalid');
    //
    //     expect(input.nativeElement.value)
    //       .toBe('', 'should to be empty text');
    //
    //     expect(input.nativeElement.classList.contains('ng-touched'))
    //       .toBe(false, 'should to be as untouched');
    //
    //     fixture.nativeElement.querySelector('input').value = 'a value';
    //     fixture.detectChanges();
    //
    //     // checking the next estate
    //
    //     expect(input.nativeElement.value)
    //       .toBe('a value', 'should to have the text');
    //
    //     expect(divGroup.nativeElement.classList.contains('has-danger'))
    //       .toBe(false, 'should not to have the class has-danger');
    //
    //   });
    // });


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
        declarations: [CheInputComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}

// fixture 1
@Component({
    template: `
        <che-input desing="borderless" color="color" label="The label"></che-input>`
})
class CheInputF1Component {
}

// fixture 2
@Component({
    template: `
        <che-input type="number"></che-input>`
})
class CheInputF2Component {
}

// fixture 3
@Component({
    template: `
        <che-input type="password"></che-input>`
})
class CheInputF3Component {
}

// fixture 4
@Component({
    template: `
        <che-input desing="borderless" color="color" label="The label" [required]="true"></che-input>`
})
class CheInputF4Component {
}

// fixture 5
@Component({
    template: `
        <che-input desing="borderless" color="color" label="The label" placeholder="this is a placeholder"></che-input>`
})
class CheInputF5Component {
}

// fixture 6
@Component({
    template: `
        <che-input desing="borderless" color="color" label="The label" [disabled]="true"></che-input>`
})
class CheInputF6Component {
}

// fixture 7
@Component({
    template: `
        <che-input desing="borderless" color="color" label="The label" [readonly]="true"></che-input>`
})
class CheInputF7Component {
}

// fixture 8
@Component({
    template: `
        <che-input color="color" label="The label"></che-input>`
})
class CheInputF8Component {
}

// fixture 9
@Component({
    template: `
        <che-input color="color" label="The label" [required]="true"></che-input>`
})
class CheInputF9Component {
}

// fixture 10
@Component({
    template: `
        <che-input color="color" label="The label" placeholder="this is a placeholder"></che-input>`
})
class CheInputF10Component {
}

// fixture 11
@Component({
    template: `
        <che-input color="color" label="The label" [disabled]="true"></che-input>`
})
class CheInputF11Component {
}

// fixture 12
@Component({
    template: `
        <che-input color="color" label="The label" [readonly]="true"></che-input>`
})
class CheInputF12Component {
}

// fixture 13
@Component({
    template: `
        <che-input desing="borderless" label="The label"></che-input>`
})
class CheInputF13Component {
}

// fixture 14
@Component({
    template: `
        <che-input label="The label"></che-input>`
})
class CheInputF14Component {
}


// @Component({
//   template: <che-input color='primary' name="input1" [(ngModel)]="input1" label="Nombre" desing="borderless" required="true"></che-input>
// })
// class FiuInputTextRequiredTestComponent {
//   color = 'primary';
//   input1 = 'un valor';
// }




