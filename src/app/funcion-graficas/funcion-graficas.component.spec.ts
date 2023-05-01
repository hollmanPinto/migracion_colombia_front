import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionGraficasComponent } from './funcion-graficas.component';

describe('FuncionGraficasComponent', () => {
  let component: FuncionGraficasComponent;
  let fixture: ComponentFixture<FuncionGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
