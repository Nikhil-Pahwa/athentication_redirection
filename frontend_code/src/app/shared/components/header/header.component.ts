import { Component, Input } from '@angular/core';
import { User } from '../../resources/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() user: User;

  constructor() { }
}
