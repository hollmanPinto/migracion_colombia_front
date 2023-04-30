import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarRutaComponent } from './enviar-ruta.component';

describe('EnviarRutaComponent', () => {
  let component: EnviarRutaComponent;
  let fixture: ComponentFixture<EnviarRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarRutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
