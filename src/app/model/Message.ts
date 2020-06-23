export interface Message {
  id: number;
  message: string;
  userId: number;
  createdAt: number;
  fileList: string[];
  channelId: number;
  notifiesUserId: string;
}
