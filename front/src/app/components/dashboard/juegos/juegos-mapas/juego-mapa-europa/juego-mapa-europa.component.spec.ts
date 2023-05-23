import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoMapaEuropaComponent } from './juego-mapa-europa.component';

describe('JuegoMapaEuropaComponent', () => {
  let component: JuegoMapaEuropaComponent;
  let fixture: ComponentFixture<JuegoMapaEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoMapaEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoMapaEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
