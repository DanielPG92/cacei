import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorpagesComponent } from './profesorpages.component';

describe('ProfesorpagesComponent', () => {
  let component: ProfesorpagesComponent;
  let fixture: ComponentFixture<ProfesorpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
