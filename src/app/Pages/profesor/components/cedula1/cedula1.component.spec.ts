import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cedula1Component } from './cedula1.component';

describe('Cedula1Component', () => {
  let component: Cedula1Component;
  let fixture: ComponentFixture<Cedula1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cedula1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cedula1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
