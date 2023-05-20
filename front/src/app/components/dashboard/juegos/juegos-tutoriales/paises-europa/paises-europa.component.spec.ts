import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEuropaComponent } from './paises-europa.component';

describe('PaisesEuropaComponent', () => {
  let component: PaisesEuropaComponent;
  let fixture: ComponentFixture<PaisesEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
