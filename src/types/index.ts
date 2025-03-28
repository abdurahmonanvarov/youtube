export interface VideoType {
  video_id: string;
  title: string;
  author: string;
  number_of_views: number;
  video_length: string;
  description: null | string;
  is_live_content: null | boolean;
  published_time: string;
  channel_id: string;
  category: null | string[];
  type: string;
  keywords: string[];
  thumbnails: VideoThumbnailI[];
}
interface VideoThumbnailI {
  url: string;
  width: number;
  height: number;
}
