import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../../model/Message';
import {MessageService} from '../../../../service/MessageService';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message = null;
  textMessage: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.textMessage = this.message.message.replace(RegExp(':D'), '😀');
  }

  deleteMessage() {
    console.log('message to delete', this.message);
    this.messageService.delete(this.message);
  }
}
