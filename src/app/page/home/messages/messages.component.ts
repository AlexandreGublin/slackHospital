import { Component } from '@angular/core';
import {Message} from '../../../model/Message';
import {MessageService} from '../../../service/MessageService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../service/LoginService';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.messages.subscribe(messages => {
      if (messages){
        this.messages = messages;
      }
    });
  }
}
