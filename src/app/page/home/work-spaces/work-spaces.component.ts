import {Component, OnInit} from '@angular/core';
import {Workspace} from '../../../model/Workspace';
import {WorkSpaceService} from '../../../service/WorkSpaceService';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-work-spaces',
  templateUrl: './work-spaces.component.html',
  styleUrls: ['./work-spaces.component.css']
})
export class WorkSpacesComponent implements OnInit {
  workspaces: Workspace[] = [];

  constructor(private route: ActivatedRoute, private workSpaceService: WorkSpaceService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      if (params.get('idWorkspace') !== '0'){
        const workspace = this.workSpaceService.getWorkspace(params.get('idWorkspace'));
        this.workSpaceService.currentWorkspace.next(workspace);
      }
    });

    this.workSpaceService.workspaces.subscribe(workspaces => {
      this.workspaces = workspaces;
    });

    // Load list workspaces
    this.workspaces = this.workSpaceService.loadWorkspaces();
  }
}
