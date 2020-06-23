import {Component, OnInit} from '@angular/core';
import {Channel} from '../../../model/Channel';
import {ChannelService} from '../../../service/ChannelService';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels: Channel[] = [];
  constructor(private route: ActivatedRoute, private channelService: ChannelService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (!params.get('idChannel') || params.get('idChannel') !== '0') {
        this.channelService.currentChannel.next(this.channelService.getChannel(params.get('idChannel')));
      }
    });

    this.channelService.channels.subscribe(channels => {
      if (channels){
        this.channels = channels;
      }
    });
  }
}
