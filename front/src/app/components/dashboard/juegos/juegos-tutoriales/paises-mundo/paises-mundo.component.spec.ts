import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesMundoComponent } from './paises-mundo.component';

describe('PaisesMundoComponent', () => {
  let component: PaisesMundoComponent;
  let fixture: ComponentFixture<PaisesMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesMundoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
