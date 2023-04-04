import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-drivers',
  templateUrl: './cards-drivers.component.html',
  styleUrls: ['./cards-drivers.component.scss'],
})
export class CardsDriversComponent {
  @Input() item: object | any;
}
