import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoBanderasEuropaComponent } from './juego-banderas-europa.component';

describe('JuegoBanderasEuropaComponent', () => {
  let component: JuegoBanderasEuropaComponent;
  let fixture: ComponentFixture<JuegoBanderasEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoBanderasEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoBanderasEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
