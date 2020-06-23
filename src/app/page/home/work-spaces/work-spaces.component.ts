import {Component, OnInit} from '@angular/core';
import {Workspace} from '../../../model/Workspace';
import {WorkSpaceService} from '../../../service/WorkSpaceService';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
      const workspace = this.workSpaceService.getWorkspace(+params.get('idWorkspace'));
      this.workSpaceService.currentWorkspace.next(workspace);
    });

    // Add a suscribe for reload list workspaces if it change
    this.workSpaceService.workspaces.subscribe(workspaces => {
      this.workspaces = workspaces;
    });

    // Load list workspaces
    this.workspaces = this.workSpaceService.loadWorkspaces();
  }
}
