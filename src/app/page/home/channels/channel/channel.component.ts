import {Component, Input} from '@angular/core';
import {Channel} from '../../../../model/Channel';
import {ChannelService} from '../../../../service/ChannelService';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent {
  @Input() channel: Channel = null;

  constructor(private channelService: ChannelService) { }

  // selectChannel(){
  //   this.channelService.currentChannel.next(this.channel);
  // }
}
