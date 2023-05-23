import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoQuizEuropaComponent } from './juego-quiz-europa.component';

describe('JuegoQuizEuropaComponent', () => {
  let component: JuegoQuizEuropaComponent;
  let fixture: ComponentFixture<JuegoQuizEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoQuizEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoQuizEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
