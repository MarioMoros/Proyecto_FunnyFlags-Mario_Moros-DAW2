import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialBanderasEuropaComponent } from './tutorial-banderas-europa.component';

describe('TutorialBanderasEuropaComponent', () => {
  let component: TutorialBanderasEuropaComponent;
  let fixture: ComponentFixture<TutorialBanderasEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialBanderasEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialBanderasEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
