import { Component } from '@angular/core';
import {PeopleService} from '../../../service/PeopleService';
import {ChannelService} from '../../../service/ChannelService';
import {LoginService} from '../../../service/LoginService';
import {User} from '../../../model/User';

@Component({
  selector: 'app-channel-peoples',
  templateUrl: './channel-peoples.component.html',
  styleUrls: ['./channel-peoples.component.scss']
})
export class ChannelPeoplesComponent {
  peoples: User[];
  constructor(private peopleService: PeopleService, private channelService: ChannelService) {
    channelService.currentChannel.subscribe(channel => {
      // if (channel){
      //   this.peoples = peopleService.getPeoples();
      // }
    });
  }
}
