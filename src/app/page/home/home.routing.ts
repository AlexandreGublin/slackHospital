import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {ChannelsComponent} from './channels/channels.component';

export const routes: Routes = [
  { path: '', redirectTo: 'workspace/0' },
  { path: 'workspace/:idWorkspace', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'channel/0'},
      { path: 'channel/:idChannel', component: ChannelsComponent }
    ]
  }
];
