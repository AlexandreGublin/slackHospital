import { Component } from '@angular/core';
import {Message} from '../../../../model/Message';
import {MessageService} from '../../../../service/MessageService';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../../service/LoginService';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent {
  newMessageForm: FormGroup;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.newMessageForm = formBuilder.group({
      message: formBuilder.control('', [
        Validators.required,
        Validators.maxLength(150)
      ])
    });
  }

  addNewMessage() {
    const date = new Date();
    const newMessage: Message = {
      userId: String(this.loginService.currentUser.getValue().userId),
      message: this.newMessageForm.get('message').value,
      createdAt: date
    };
    this.messageService.push(newMessage);
    this.newMessageForm.reset();
  }

}
