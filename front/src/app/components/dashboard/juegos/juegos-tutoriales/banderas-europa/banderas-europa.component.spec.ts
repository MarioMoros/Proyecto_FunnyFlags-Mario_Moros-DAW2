import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanderasEuropaComponent } from './banderas-europa.component';

describe('BanderasEuropaComponent', () => {
  let component: BanderasEuropaComponent;
  let fixture: ComponentFixture<BanderasEuropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanderasEuropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanderasEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
