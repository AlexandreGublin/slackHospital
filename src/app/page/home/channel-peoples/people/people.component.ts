import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../model/User';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent{
  @Input() people: User = null;
  constructor() {}
}
