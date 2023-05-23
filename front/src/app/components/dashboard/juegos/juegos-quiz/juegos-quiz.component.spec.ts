import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosQuizComponent } from './juegos-quiz.component';

describe('JuegosQuizComponent', () => {
  let component: JuegosQuizComponent;
  let fixture: ComponentFixture<JuegosQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
