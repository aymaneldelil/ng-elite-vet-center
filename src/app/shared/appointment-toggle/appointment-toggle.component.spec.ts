import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentToggleComponent } from './appointment-toggle.component';

describe('AppointmentToggleComponent', () => {
  let component: AppointmentToggleComponent;
  let fixture: ComponentFixture<AppointmentToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
