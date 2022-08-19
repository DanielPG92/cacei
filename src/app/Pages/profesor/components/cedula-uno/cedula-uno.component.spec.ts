import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CedulaUnoComponent } from './cedula-uno.component';

describe('CedulaUnoComponent', () => {
  let component: CedulaUnoComponent;
  let fixture: ComponentFixture<CedulaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CedulaUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CedulaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
