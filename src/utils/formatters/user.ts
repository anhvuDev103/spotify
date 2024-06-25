import {
  Album,
  Artist,
  FollowedArtists,
  Page,
  Playlist,
  SavedAlbum,
  SavedTrack,
  UserProfile,
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
  profile: UserProfile;
};

export const formatUserSummary = ({
  userPlaylists,
  userSavedTracks,
  userSavedAlbums,
  userFollowedArtists,
  userProfile,
}: {
  userPlaylists: Playlist[];
  userSavedTracks: SavedTrack[];
  userSavedAlbums: SavedAlbum[];
  userFollowedArtists: Artist[];
  userProfile: UserProfile;
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
    profile: userProfile,
  };
};
