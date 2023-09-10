export interface IImage {
  caption: string;
  closeFriend: boolean;
  commentsCount: number;
  id: string;
  photos: string[];
  likesCount: number;
  photosCount: number;
  tags: string[];
  createdAt: Date;
  photo: File;
}
