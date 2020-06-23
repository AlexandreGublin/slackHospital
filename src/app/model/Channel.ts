export interface Channel {
  id: string;
  userId: number;
  usersId: number[];
  name: string;
  icon: string;
  isPublic: boolean;
  workspaceId: number;
}
