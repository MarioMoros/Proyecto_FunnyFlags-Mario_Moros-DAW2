import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosMapasComponent } from './juegos-mapas.component';

describe('JuegosMapasComponent', () => {
  let component: JuegosMapasComponent;
  let fixture: ComponentFixture<JuegosMapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosMapasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosMapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
