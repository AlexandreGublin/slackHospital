import {Injectable} from '@angular/core';
import {FirebaseService} from './FirebaseService';
import {User} from '../model/User';
import {LoginService} from './LoginService';
import {ChannelService} from './ChannelService';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peoplesMock: User[] = [{id: 1, firstname: 'Hailey', lastname: 'Ross', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'},
    {id: 2, firstname: 'Violet', lastname: 'Reyes', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'},
    {id: 3, firstname: 'Liam ', lastname: 'Harper', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'},
    {id: 4, firstname: 'Jackson', lastname: 'Kelly', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'}
  ];

  constructor(private firebaseService: FirebaseService, private loginService: LoginService, private channelService: ChannelService) {}

  getPeoples(): User[] {
      return this.peoplesMock.filter(p => this.channelService.currentChannel.getValue().usersId.indexOf(p.id) !== -1);
  }
  getPeople(peopleId: number): User {
    return {id: 1, firstname: 'Hailey', lastname: 'Ross', image: 'https://randomuser.me/api/portraits/med/men/75.jpg'};
  }
}
