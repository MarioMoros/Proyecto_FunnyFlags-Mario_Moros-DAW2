import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosBanderasComponent } from './juegos-banderas.component';

describe('JuegosBanderasComponent', () => {
  let component: JuegosBanderasComponent;
  let fixture: ComponentFixture<JuegosBanderasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosBanderasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosBanderasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
