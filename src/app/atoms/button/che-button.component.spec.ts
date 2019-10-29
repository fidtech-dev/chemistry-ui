import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheButtonComponent } from './che-button.component';

describe('che-button Component', () => {
  let component: CheButtonComponent;
  let fixture: ComponentFixture<CheButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
