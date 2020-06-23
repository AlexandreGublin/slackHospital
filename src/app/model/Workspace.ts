import {User} from './User';

export interface Workspace {
  id: number;
  name: string;
  icon: string;
  ownerId: number;
  usersId: number[];
  createdAt: number;
}
