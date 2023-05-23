import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialPaisesMundoComponent } from './tutorial-paises-mundo.component';

describe('TutorialPaisesMundoComponent', () => {
  let component: TutorialPaisesMundoComponent;
  let fixture: ComponentFixture<TutorialPaisesMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialPaisesMundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialPaisesMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
