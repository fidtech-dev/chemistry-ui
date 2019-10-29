import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import { CheCheckboxComponent } from './che-checkbox.component';

describe('che-checkbox Component', () => {
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

});
