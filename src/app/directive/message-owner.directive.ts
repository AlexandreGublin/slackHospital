import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appMessageOwner]'
})
export class MessageOwnerDirective implements AfterViewInit {
  @Input() ownerMessage: number;

  constructor(private elemement: ElementRef) {}

  ngAfterViewInit() {
    console.log('owner message ' + this.ownerMessage);
    this.elemement.nativeElement.innerHTML = this.elemement.nativeElement.innerHTML + ' - ' + this.ownerMessage.toString();
  }
}
