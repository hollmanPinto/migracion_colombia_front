import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieGraficasComponent } from './pie-graficas.component';

describe('PieGraficasComponent', () => {
  let component: PieGraficasComponent;
  let fixture: ComponentFixture<PieGraficasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieGraficasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
