import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGridWorkspaceComponent } from './menu-grid-workspace.component';

describe('MenuGridWorkspaceComponent', () => {
  let component: MenuGridWorkspaceComponent;
  let fixture: ComponentFixture<MenuGridWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGridWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGridWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
