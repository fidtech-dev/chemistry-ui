import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FiuCheckboxComponent } from './fiu-checkbox.component';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';


describe('CheckBoxComponent', () => {
  let component: FiuCheckboxComponent;
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule, FormsModule],
      declarations: [ FiuCheckboxComponent, FiuInputTextRequiredTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiuInputTextRequiredTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // describe('Basic behaviors', () => {
  //   // cuando el ngModule is true debe estar checkeado
  //   it('should create', () => {
  //     console.log('asd');
  //     console.log(component.color);
  //     expect(component).toBeTruthy();
  //   });
  // });

});


@Component({
  template: `<fiu-checkbox [(ngModel)]='checkbox' color="primary" label='esto es un label por dos' ></fiu-checkbox>`
})
class FiuInputTextRequiredTestComponent {
  color = 'primary';
  input1 = 'un valor';
}
