import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheInputComponent } from './che-input.component';

describe('FiuInputComponent', () => {
  let component: CheInputComponent;
  let fixture: ComponentFixture<CheInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
