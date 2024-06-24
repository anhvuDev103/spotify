import { TopContent } from '@utils/formatters/home';

export const TOP_CONTENT_LIMIT = 8;

export const LIKED_SONGS_COLLECTION = {
  name: 'Liked Songs',
  images: [
    {
      height: 640,
      url: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
      width: 640,
    },
  ],
  uri: 'spotify:collection:tracks',
} as TopContent;
