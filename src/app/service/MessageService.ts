import {Injectable} from '@angular/core';
import {Message} from '../model/Message';
import {FirebaseService} from './FirebaseService';
import {LoginService} from './LoginService';
import {BehaviorSubject} from 'rxjs';
import {ChannelService} from './ChannelService';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  messagesMock: Message[] = [
    {id: 1, channelId: 1, message: 'first message :D', createdAt: 1587555589, fileList: null, notifiesUserId: null, userId: 1},
    {id: 2, channelId: 1, message: 'Autre message', createdAt: 1587555590, fileList: null, notifiesUserId: null, userId: 1},
    {id: 3, channelId: 1, message: 'Hello world', createdAt: 1587555590, fileList: null, notifiesUserId: null, userId: 1},
    {id: 4, channelId: 2, message: 'Test message', createdAt: 1587555590, fileList: null, notifiesUserId: null, userId: 1},
    {id: 5, channelId: 2, message: 'Test message2', createdAt: 1587555590, fileList: null, notifiesUserId: null, userId: 1},
    {id: 6, channelId: 2, message: 'Test message3', createdAt: 1587555590, fileList: null, notifiesUserId: null, userId: 1}
  ];

  constructor(private firebaseService: FirebaseService, private channelService: ChannelService, private loginService: LoginService) {
    this.channelService.currentChannel.subscribe(channel => {
      this.loadMessages();
    });
  }

  loadMessages(){
    if (this.channelService.currentChannel.getValue()){
      this.messages.next(this.messagesMock.filter(c => c.channelId === this.channelService.currentChannel.getValue().id));
    }else{
      this.messages.next(null);
    }
  }

  getMessage(messageId: number, channelId: number){}
  push(channelId: number, message: Message){}
  update(message: Message){}
  delete(message: Message){}
}
