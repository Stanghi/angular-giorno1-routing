import { Component } from '@angular/core';
import dbSchedule from '../../db-schedule.json';
import dbDrivers from '../../db-drivers.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  dbSchedule: {
    id: Number;
    place: String;
    date: String;
    circuit: String;
    img: String;
  }[] = dbSchedule;

  dbDrivers: {
    id: Number;
    name: String;
    team: String;
    number: String;
    img: String;
  }[] = dbDrivers;
}
