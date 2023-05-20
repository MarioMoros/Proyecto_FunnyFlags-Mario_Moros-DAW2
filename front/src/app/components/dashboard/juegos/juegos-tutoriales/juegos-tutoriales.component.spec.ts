import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosTutorialesComponent } from './juegos-tutoriales.component';

describe('JuegosTutorialesComponent', () => {
  let component: JuegosTutorialesComponent;
  let fixture: ComponentFixture<JuegosTutorialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosTutorialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosTutorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
