import {Component, Input} from '@angular/core';
import {Workspace} from '../../../../model/Workspace';
import {WorkSpaceService} from '../../../../service/WorkSpaceService';

@Component({
  selector: 'app-work-space',
  templateUrl: './work-space.component.html',
  styleUrls: ['./work-space.component.scss']
})
export class WorkSpaceComponent {
  @Input() workspace: Workspace = null;
  constructor(private workSpaceService: WorkSpaceService) {}

  selectWorkspace(){
    this.workSpaceService.currentWorkspace.next(this.workspace);
  }
}
