import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './home.routing';
import {HomeComponent} from './home.component';
import {MessagesComponent} from './messages/messages.component';
import {MessageComponent} from './messages/message/message.component';
import {AddMessageComponent} from './messages/add-message/add-message.component';
import {WorkSpaceComponent} from './work-spaces/work-space/work-space.component';
import {ChannelComponent} from './channels/channel/channel.component';
import {ChannelsComponent} from './channels/channels.component';
import {WorkSpacesComponent} from './work-spaces/work-spaces.component';
import {ChannelPeoplesComponent} from './channel-peoples/channel-peoples.component';
import {PeopleComponent} from './channel-peoples/people/people.component';
import {HeaderComponent} from './header/header.component';
import {TitleHeaderComponent} from './header/title-header/title-header.component';
import {UserHeaderComponent} from './header/user-header/user-header.component';
import {SearchHeaderComponent} from './header/search-header/search-header.component';
import {FilterHeaderComponent} from './header/filter-header/filter-header.component';
import {AddWorkspaceComponent} from './work-spaces/add-workspace/add-workspace.component';
import {SearchWorkspaceComponent} from './work-spaces/search-workspace/search-workspace.component';
import {MenuGridWorkspaceComponent} from './work-spaces/menu-grid-workspace/menu-grid-workspace.component';
import {MessageOwnerDirective} from '../../directive/message-owner.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    MessagesComponent,
    MessageComponent,
    AddMessageComponent,
    WorkSpaceComponent,
    ChannelComponent,
    ChannelsComponent,
    WorkSpacesComponent,
    ChannelPeoplesComponent,
    PeopleComponent,
    HeaderComponent,
    TitleHeaderComponent,
    UserHeaderComponent,
    SearchHeaderComponent,
    FilterHeaderComponent,
    AddWorkspaceComponent,
    SearchWorkspaceComponent,
    MenuGridWorkspaceComponent,
    MessageOwnerDirective,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})

export class HomeModule { }
