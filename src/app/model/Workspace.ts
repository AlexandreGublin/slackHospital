import {User} from './User';

export interface Workspace {
  id: string;
  name: string;
  icon?: string;
  ownerId: number;
  usersId: number[];
  createdAt: number;
}
