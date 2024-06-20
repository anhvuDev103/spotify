import {
  Artist,
  FollowedArtists,
  Page,
  Playlist,
  SavedAlbum,
  SavedTrack,
} from '@spotify/web-api-ts-sdk';

export type FormattedUserSummary = {
  playlists: Playlist[];
  savedTracks: SavedTrack[];
  savedAlbums: SavedAlbum[];
  followedArtists: Artist[];
};

export const formatUserSummary = ({
  userPlaylists,
  userSavedTracks,
  userSavedAlbums,
  userFollowedArtists,
}: {
  userPlaylists: Page<Playlist>;
  userSavedTracks: Page<SavedTrack>;
  userSavedAlbums: Page<SavedAlbum>;
  userFollowedArtists: FollowedArtists;
}): FormattedUserSummary => {
  return {
    playlists: userPlaylists.items,
    savedTracks: userSavedTracks.items,
    savedAlbums: userSavedAlbums.items,
    followedArtists: userFollowedArtists.artists.items,
  };
};
