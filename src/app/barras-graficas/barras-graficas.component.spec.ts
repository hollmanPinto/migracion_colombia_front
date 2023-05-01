import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrasGraficasComponent } from './barras-graficas.component';

describe('BarrasGraficasComponent', () => {
  let component: BarrasGraficasComponent;
  let fixture: ComponentFixture<BarrasGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrasGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrasGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
