import {Injectable} from '@angular/core';
import {Message} from '../model/Message';
import {BehaviorSubject} from 'rxjs';
import {ChannelService} from './ChannelService';
import {Channel} from '../model/Channel';
import {AngularFirestore} from '@angular/fire/firestore';
import {WorkSpaceService} from './WorkSpaceService';
import {Local} from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  messagesDb = undefined;

  constructor(private db: AngularFirestore,
              private channelService: ChannelService,
              private workSpaceService: WorkSpaceService) {
    this.channelService.currentChannel.subscribe(channel => {
      if (this.messagesDb !== undefined) {
        this.messagesDb.unsubscribe();
      }
      this.loadMessages(channel);
    });
  }

  loadMessages(channel: Channel){
    if (!channel){
      this.messages.next(null);
    }else{
      this.messagesDb = this.db.collection(`workspaces/${this.workSpaceService.currentWorkspace.getValue().id}/channels/${channel.id}/messages`, ref => ref.orderBy('createdAt'))
        .snapshotChanges()
        .subscribe(docs => {
          const list = docs.map(a => {
            const data = a.payload.doc.data() as Message;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
          this.messages.next(list);
        });
    }
  }

  getMessage(messageId: number, channelId: number){}
  push(message: Message){
    this.db
      .collection(`workspaces/${this.workSpaceService.currentWorkspace.getValue().id}/channels/${this.channelService.currentChannel.getValue().id}/messages`)
      .add(message).catch(error => {
      console.log('Error db push message', error);
    });
  }
  update(message: Message){}
  delete(message: Message){
    this.db
      .collection(`workspaces/${this.workSpaceService.currentWorkspace.getValue().id}/channels/${this.channelService.currentChannel.getValue().id}/messages`)
      .doc(message.id)
      .delete().catch(error => {
        console.log('Error db delete message', error);
    });
  }
}
