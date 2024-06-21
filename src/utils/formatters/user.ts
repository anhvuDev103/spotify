import {
  Album,
  Artist,
  FollowedArtists,
  Page,
  Playlist,
  SavedAlbum,
  SavedTrack,
} from '@spotify/web-api-ts-sdk';
import moment from 'moment';

export type FormattedUserSummary = {
  playlists: Playlist[];
  savedTracks: SavedTrack[];
  savedAlbums: FormattedSavedAlbum[];
  followedArtists: Artist[];
};

export type FormattedSavedAlbum = {
  added_at: number;
} & Album;

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
  const formattedSavedAlbums = userSavedAlbums.items.map<FormattedSavedAlbum>(
    (savedAlbum) => {
      return {
        added_at: moment(savedAlbum.added_at).unix(),
        ...savedAlbum.album,
      };
    },
  );

  return {
    playlists: userPlaylists.items,
    savedTracks: userSavedTracks.items,
    savedAlbums: formattedSavedAlbums,
    followedArtists: userFollowedArtists.artists.items,
  };
};
