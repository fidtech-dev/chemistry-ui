import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiuButtonComponent } from './fiu-button.component';

describe('ButtonComponent', () => {
  let component: FiuButtonComponent;
  let fixture: ComponentFixture<FiuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
