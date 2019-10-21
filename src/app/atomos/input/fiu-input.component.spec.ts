import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiuInputComponent } from './fiu-input.component';

describe('FiuInputComponent', () => {
  let component: FiuInputComponent;
  let fixture: ComponentFixture<FiuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
