import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDriversComponent } from './cards-drivers.component';

describe('CardsDriversComponent', () => {
  let component: CardsDriversComponent;
  let fixture: ComponentFixture<CardsDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
