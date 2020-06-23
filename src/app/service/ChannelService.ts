import {Injectable} from '@angular/core';
import {FirebaseService} from './FirebaseService';
import {Channel} from '../model/Channel';
import {BehaviorSubject, Observable} from 'rxjs';
import {LoginService} from './LoginService';
import {WorkSpaceService} from './WorkSpaceService';
import {Workspace} from '../model/Workspace';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  currentChannel: BehaviorSubject<Channel> = new BehaviorSubject<Channel>(null);
  channels: BehaviorSubject<Channel[]> = new BehaviorSubject<Channel[]>([]);
  channelDb = undefined;
  channelsMock = [
    {id: 1, userId: 1, usersId: [1, 4, 3], isPublic: true, name: 'Test', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 1},
    {id: 2, userId: 1, usersId: [1, 2], isPublic: true, name: 'Test2', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 1},
    {id: 3, userId: 1, usersId: [1, 3, 4], isPublic: true, name: 'Test3', icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg', workspaceId: 2}
  ];

  constructor(private db: AngularFirestore, private loginService: LoginService, private workSpaceService: WorkSpaceService, private router: Router) {
    this.workSpaceService.currentWorkspace.subscribe(workspace => {
      if (this.channelDb !== undefined) {
        this.channelDb.unsubscribe();
      }
      this.loadChannels(workspace);
    });
  }

  loadChannels(workspace: Workspace): Channel[] {
    if (!this.workSpaceService.currentWorkspace.getValue()){
      this.channels.next(null);
    }else{
      // this.channels.next(this.channelsMock.filter(c => c.workspaceId === this.workSpaceService.currentWorkspace.getValue().id));
      this.channelDb = this.db.collection(`workspaces/${workspace.id}/channels`).snapshotChanges().subscribe(docs => {
        const list = docs.map(a => {
          const data = a.payload.doc.data() as Channel;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
        this.channels.next(list);
        this.selectChannel();
      });
    }

    this.currentChannel.next(null);
    return this.channels.getValue();
  }

  selectChannel(): void {
    if (this.channels.getValue().length > 0) {
      this.router.navigate(['channel', this.channels.getValue()[0].id]);
    }
  }

  getChannel(channelId: string): Channel {
    return  this.channels.getValue().find(c => c.id === channelId);
  }
  push(channel: Channel){}
  update(channel: Channel){}
  delete(channelId: number){}
}
