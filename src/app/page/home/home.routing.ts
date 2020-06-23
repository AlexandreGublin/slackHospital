import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {ChannelsComponent} from './channels/channels.component';

export const routes: Routes = [
  { path: '', redirectTo: 'workspace/1' },
  { path: 'workspace/:idWorkspace', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'channel/'},
      { path: 'channel/:idChannel', component: ChannelsComponent }
    ]
  }
];
