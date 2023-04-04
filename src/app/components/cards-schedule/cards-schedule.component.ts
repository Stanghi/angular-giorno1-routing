import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-schedule',
  templateUrl: './cards-schedule.component.html',
  styleUrls: ['./cards-schedule.component.scss'],
})
export class CardsScheduleComponent {
  @Input() item: object | any;
}
