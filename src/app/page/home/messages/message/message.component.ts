import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../../../model/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message = null;
  textMessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.message.userId);
    this.textMessage = this.message.message.replace(RegExp(':D'), '😀');
  }

}
