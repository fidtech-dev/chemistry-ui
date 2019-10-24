import { async, ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing';
import { CheInputComponent } from './che-input.component';
import { FormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Component, inject, Provider, Type} from '@angular/core';
// import {FiuInputModule} from './fiu-input.module';


describe('FiuInput as a individual compoenent', () => {
  // Error: Si el elemento es no tiene definido un design debe mostrarse ByDefault
  // Si el componente no tiene un model definido, no me deja utilizar
  describe('Default desing', () => {


  });

  describe('with desing borderless', () => {
    it('should to have floating labels', () => {
      let fixture = createComponent(FiuInputBorderlessLabelAttrTestComponent);
      fixture.detectChanges();

      let label = fixture.debugElement.query(By.css('label'));
      expect(label.attributes.class).toBe('labelMaterial', 'shoulf to have the class labelMaterial');
    });

    it('should init with the text "Label"', () => {
      let fixture = createComponent(FiuInputBorderlessLabelAttrTestComponent);
      fixture.detectChanges();

      let label = fixture.debugElement.query(By.css('label'));
      expect(label!.nativeElement.textContent).toBe('Label');
    });
  });

  describe('general cases', () => {

    // validar que al setear un texto debe estar validado el campo
    it('should to validate when to set a value in the input the field is valid', () => {
      let fixture = createComponent(FiuInputTextRequiredTestComponent);
      fixture.detectChanges();

      let input = fixture.debugElement.query(By.css('input'))!;
      let divGroup = fixture.debugElement.query(By.css('.group'))!;

      // checking previous state
      expect(input.nativeElement.classList.contains('ng-invalid'))
        .toBe(true, 'should to be invalid');

      expect(input.nativeElement.required)
        .toBe(true, 'should be required');

      expect(input.nativeElement.classList.contains('ng-touched'))
        .toBe(false, 'should to be as untouched');

      expect(divGroup.nativeElement.classList.contains('has-danger'))
        .toBe(false, 'should be false');

      // to make focus over the input
      input.triggerEventHandler('focus',null);
      input.triggerEventHandler('blur',null);

      fixture.detectChanges();

      expect(input.nativeElement.classList.contains('ng-touched'))
        .toBe(true, 'should to be as touched');

      console.log(divGroup.classes);
      expect(divGroup.nativeElement.classList.contains('has-danger'))
        .toBe(true, 'should to have the class has-danger');
    });

    // validar que el input tenga el valor seteado
    it('should to validate when to set a value in the input this contain the value', () => {
      let fixture = createComponent(FiuInputTextRequiredTestComponent);
      fixture.detectChanges();

      let input = fixture.debugElement.query(By.css('input'))!;
      let divGroup = fixture.debugElement.query(By.css('.group'))!;

      // checking the input is empty
      expect(input.nativeElement.classList.contains('ng-invalid'))
        .toBe(true, 'should to be invalid');

      expect(input.nativeElement.value)
        .toBe('', 'should to be empty text');

      expect(input.nativeElement.classList.contains('ng-touched'))
        .toBe(false, 'should to be as untouched');

      fixture.nativeElement.querySelector('input').value = 'a value';
      fixture.detectChanges();

      // checking the next estate

      expect(input.nativeElement.value)
        .toBe('a value', 'should to have the text');

      expect(divGroup.nativeElement.classList.contains('has-danger'))
        .toBe(false, 'should not to have the class has-danger');

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
    declarations: [CheInputComponent, component, ...declarations],
    providers,
  }).compileComponents();

  return TestBed.createComponent<T>(component);
}


@Component({
  template: `<fiu-input></fiu-input>`
})
class FiuInputTextByDefaultTestComponent {}

@Component({
  template: `<fiu-input label="Label" desing="borderless" ></fiu-input>`
})
class FiuInputBorderlessLabelAttrTestComponent {
  text: string = 'valor posible';
  input1: string = 'texto de Ejemplo';
}

@Component({
  template: `<fiu-input color='primary' name="input1" [(ngModel)]="input1" label="Nombre" desing="borderless" required="true"></fiu-input>`
})
class FiuInputTextRequiredTestComponent {
  color = 'primary';
  input1 = 'un valor';
}




