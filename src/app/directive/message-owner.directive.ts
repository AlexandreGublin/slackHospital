import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {LoginService} from '../service/LoginService';

@Directive({
  selector: '[appMessageOwner]'
})
export class MessageOwnerDirective implements AfterViewInit {
  @Input() ownerMessage: number;

  constructor(private elemement: ElementRef, private loginService: LoginService) {}

  ngAfterViewInit() {
    this.elemement.nativeElement.innerHTML = `${this.loginService.users.getValue().find(u => u.userId === this.ownerMessage ).name} à écrit : \n ${this.elemement.nativeElement.innerHTML}`;
  }
}
