import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import { CheCheckboxComponent } from './che-checkbox.component';

describe('CheckBoxComponent', () => {
  let component: CheCheckboxComponent;
  let fixture: ComponentFixture<CheCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
      declarations: [ CheCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheCheckboxComponent);
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
  template: `<che-checkbox [(ngModel)]='checkbox' color="primary" label='esto es un label por dos' ></che-checkbox>`
})
class FiuInputTextRequiredTestComponent {
  color = 'primary';
  input1 = 'un valor';
}
