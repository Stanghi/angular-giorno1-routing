import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsScheduleComponent } from './cards-schedule.component';

describe('CardsScheduleComponent', () => {
  let component: CardsScheduleComponent;
  let fixture: ComponentFixture<CardsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
