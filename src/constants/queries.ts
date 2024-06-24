export const queryKeysFactory = {
  //user
  getCurrentUserPlaylists: ['getCurrentUserPlaylists'],
  getCurrentUserSavedTracks: ['getCurrentUserSavedTracks'],
  getCurrentUserSavedAlbums: ['getCurrentUserSavedAlbums'],
  getCurrentUserFollowedArtists: ['getCurrentUserFollowedArtists'],

  //home
  getFeaturedPlaylists: ['getFeaturedPlaylists'],
  getSeveralBrowseCategories: ['getSeveralBrowseCategories'],
  getPlaylistsByCategoryId: (category_id: string) => [
    'getPlaylistsByCategoryId',
    category_id,
  ],
};
