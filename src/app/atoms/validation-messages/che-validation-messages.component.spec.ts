import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheValidationMessagesComponent } from './che-validation-messages.component';

describe('FiuValidationMessagesComponent', () => {
  let component: CheValidationMessagesComponent;
  let fixture: ComponentFixture<CheValidationMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheValidationMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheValidationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
