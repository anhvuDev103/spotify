import { RequestParams } from '@utils/types';

export const queryKeysFactory = {
  //user
  getCurrentUserPlaylists: ['getCurrentUserPlaylists'],
  getCurrentUserSavedTracks: ['getCurrentUserSavedTracks'],
  getCurrentUserSavedAlbums: ['getCurrentUserSavedAlbums'],
  getCurrentUserFollowedArtists: ['getCurrentUserFollowedArtists'],
  getCurrentUserProfile: ['getCurrentUserProfile'],

  //home
  getFeaturedPlaylists: ['getFeaturedPlaylists'],
  getSeveralBrowseCategories: (params?: RequestParams) => [
    'getSeveralBrowseCategories',
    params,
  ],
  getPlaylistsByCategoryId: (category_id: string) => [
    'getPlaylistsByCategoryId',
    category_id,
  ],
};
