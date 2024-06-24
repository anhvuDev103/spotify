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

export type FormattedSavedAlbum = {
  added_at: number;
} & Album;

export type FormattedUserSummary = {
  playlists: Playlist[];
  savedTracks: SavedTrack[];
  savedAlbums: FormattedSavedAlbum[];
  followedArtists: Artist[];
};

export const formatUserSummary = ({
  userPlaylists,
  userSavedTracks,
  userSavedAlbums,
  userFollowedArtists,
}: {
  userPlaylists: Playlist[];
  userSavedTracks: SavedTrack[];
  userSavedAlbums: SavedAlbum[];
  userFollowedArtists: FollowedArtists['artists']['items'];
}): FormattedUserSummary => {
  const formattedSavedAlbums = userSavedAlbums.map<FormattedSavedAlbum>(
    (savedAlbum) => {
      return {
        added_at: moment(savedAlbum.added_at).unix(),
        ...savedAlbum.album,
      };
    },
  );

  return {
    playlists: userPlaylists,
    savedTracks: userSavedTracks,
    savedAlbums: formattedSavedAlbums,
    followedArtists: userFollowedArtists,
  };
};
