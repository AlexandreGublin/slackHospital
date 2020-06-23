import {Injectable} from '@angular/core';
import {FirebaseService} from './FirebaseService';
import {Workspace} from '../model/Workspace';
import {BehaviorSubject} from 'rxjs';
import {LoginService} from './LoginService';
import { AngularFirestore } from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WorkSpaceService {
  currentWorkspace: BehaviorSubject<Workspace> = new BehaviorSubject<Workspace>(null);
  workspaces: BehaviorSubject<Workspace[]> = new BehaviorSubject<Workspace[]>([]);
  workspaceDb = undefined;
  workspaceMock = [
    {id: 1, createdAt: 1587555589, name: 'SDW Mobile', ownerId: 1, usersId: [1, 2, 3, 4], icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg'},
    {id: 2, createdAt: 1587555589, name: 'Second W', ownerId: 1, usersId: [1, 2, 3, 4], icon: 'https://www.motoplanete.com/icone/Icone-125-Twin-2018.jpg'}
  ];

  constructor(private db: AngularFirestore, private loginService: LoginService, private router: Router) {
    this.loginService.currentUser.subscribe(user => {
      if (this.workspaceDb !== undefined) {
        this.workspaceDb.unsubscribe();
      }
      this.loadWorkspaces();
    });
  }

  loadWorkspaces(): Workspace[]{
    if (!this.loginService.currentUser){
      this.workspaces.next(null);
    }else{
      this.workspaceDb = this.db.collection('workspaces').snapshotChanges().subscribe(docs => {
        const list = docs.map(a => {
          const data = a.payload.doc.data() as Workspace;
          const id = a.payload.doc.id;
          return {id, ...data};
        });

        this.workspaces.next(list);
        this.selectWorkspace();
      });
    }
    this.currentWorkspace.next(null);
    return this.workspaces.getValue();
  }

  selectWorkspace(): void {
    if (this.workspaces.getValue().length > 0) {
      this.router.navigate(['workspace', this.workspaces.getValue()[0].id]);
    }
  }

  getWorkspace(workspaceId: string): Workspace{
    const workspace = this.workspaces.getValue().find(w => w.id === workspaceId);
    if (workspace) {
      return workspace;
    }
  }
  push(workSpace: Workspace){}
  update(workSpace: Workspace){}
  delete(workSpaceId: number){}
}
