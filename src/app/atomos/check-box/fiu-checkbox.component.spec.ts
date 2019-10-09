import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FiuCheckboxComponent } from './fiu-checkbox.component';

describe('CheckBoxComponent', () => {
  let component: FiuCheckboxComponent;
  let fixture: ComponentFixture<FiuCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
      declarations: [ FiuCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiuCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
