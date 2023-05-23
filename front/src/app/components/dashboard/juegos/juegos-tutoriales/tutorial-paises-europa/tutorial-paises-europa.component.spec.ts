import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPaisesEuropaComponent } from './tutorial-paises-europa.component';

describe('TutorialPaisesEuropaComponent', () => {
  let component: TutorialPaisesEuropaComponent;
  let fixture: ComponentFixture<TutorialPaisesEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialPaisesEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialPaisesEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
