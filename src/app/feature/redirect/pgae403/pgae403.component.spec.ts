import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgae403Component } from './pgae403.component';

describe('Pgae403Component', () => {
  let component: Pgae403Component;
  let fixture: ComponentFixture<Pgae403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgae403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pgae403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
