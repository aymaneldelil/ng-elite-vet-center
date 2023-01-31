import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HNavbarComponent } from './h-navbar.component';

describe('HNavbarComponent', () => {
  let component: HNavbarComponent;
  let fixture: ComponentFixture<HNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
