import {Injectable} from '@angular/core';
import {FirebaseService} from './FirebaseService';
import {Workspace} from '../model/Workspace';
import {BehaviorSubject} from 'rxjs';
import {LoginService} from './LoginService';

@Injectable({
  providedIn: 'root'
})
export class WorkSpaceService {
  currentWorkspace: BehaviorSubject<Workspace> = new BehaviorSubject<Workspace>(null);
  workspaces: BehaviorSubject<Workspace[]> = new BehaviorSubject<Workspace[]>([]);
  workspaceMock = [
    {id: 1, createdAt: 1587555589, name: 'SDW Mobile', ownerId: 1, usersId: [1, 2, 3, 4], icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg'},
    {id: 2, createdAt: 1587555589, name: 'Second W', ownerId: 1, usersId: [1, 2, 3, 4], icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg'}
  ];

  constructor(private firebaseService: FirebaseService, private loginService: LoginService) {
    this.loginService.currentUser.subscribe(user => {
      this.loadWorkspaces();
    });
  }

  loadWorkspaces(): Workspace[]{
    if (this.loginService.currentUser){
      this.workspaces.next(this.workspaceMock.filter(c => c.usersId.indexOf(this.loginService.currentUser.getValue().id) !== -1));
    }else{
      this.workspaces.next(null);
    }
    this.currentWorkspace.next(null);
    return this.workspaces.getValue();
  }

  getWorkspace(workspaceId: number): Workspace{
    const workspace = this.workspaces.getValue().find(w => w.id === workspaceId);
    if (workspace) {
      return workspace;
    }
  }
  push(workSpace: Workspace){}
  update(workSpace: Workspace){}
  delete(workSpaceId: number){}
}
