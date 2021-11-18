import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosdepartamentoComponent } from './empleadosdepartamento.component';

describe('EmpleadosdepartamentoComponent', () => {
  let component: EmpleadosdepartamentoComponent;
  let fixture: ComponentFixture<EmpleadosdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
