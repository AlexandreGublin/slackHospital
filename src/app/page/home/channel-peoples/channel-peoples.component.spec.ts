import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPeoplesComponent } from './channel-peoples.component';

describe('ChannelPeoplesComponent', () => {
  let component: ChannelPeoplesComponent;
  let fixture: ComponentFixture<ChannelPeoplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPeoplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
