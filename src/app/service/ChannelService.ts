import {Injectable} from '@angular/core';
import {FirebaseService} from './FirebaseService';
import {Channel} from '../model/Channel';
import {BehaviorSubject} from 'rxjs';
import {LoginService} from './LoginService';
import {WorkSpaceService} from './WorkSpaceService';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  currentChannel: BehaviorSubject<Channel> = new BehaviorSubject<Channel>(null);
  channels: BehaviorSubject<Channel[]> = new BehaviorSubject<Channel[]>([]);
  channelsMock = [
    {id: 1, userId: 1, usersId: [1, 4, 3], isPublic: true, name: 'Test', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 1},
    {id: 2, userId: 1, usersId: [1, 2], isPublic: true, name: 'Test2', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 1},
    {id: 3, userId: 1, usersId: [1, 3, 4], isPublic: true, name: 'Test3', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 2}
  ];

  constructor(private firebaseService: FirebaseService, private loginService: LoginService, private workSpaceService: WorkSpaceService) {
    this.workSpaceService.currentWorkspace.subscribe(workspace => {
        this.loadChannels();
    });
  }

  loadChannels(): Channel[] {
    if (this.workSpaceService.currentWorkspace.getValue()){
      this.channels.next(this.channelsMock.filter(c => c.workspaceId === this.workSpaceService.currentWorkspace.getValue().id));
    }else{
      this.channels.next(null);
    }
    this.currentChannel.next(null);
    return this.channels.getValue();
  }

  getChannel(channelId: number): Channel {
    return this.channels.getValue().find(c => c.id === channelId);
  }
  push(channel: Channel){}
  update(channel: Channel){}
  delete(channelId: number){}
}
