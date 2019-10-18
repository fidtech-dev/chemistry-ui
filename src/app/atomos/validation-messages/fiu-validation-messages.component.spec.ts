import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiuValidationMessagesComponent } from './fiu-validation-messages.component';

describe('FiuValidationMessagesComponent', () => {
  let component: FiuValidationMessagesComponent;
  let fixture: ComponentFixture<FiuValidationMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiuValidationMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiuValidationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
