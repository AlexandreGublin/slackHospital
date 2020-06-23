export interface Channel {
  id: number;
  userId: number;
  usersId: number[];
  name: string;
  icon: string;
  isPublic: boolean;
  workspaceId: number;
}
