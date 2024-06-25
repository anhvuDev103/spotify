import {
  Artist,
  Playlist,
  SavedAlbum,
  SavedTrack,
  UserProfile,
} from '@spotify/web-api-ts-sdk';
import { formatUserSummary } from '@utils/formatters/user';
import { combineQueries } from '@utils/queries';

import useCurrentUserFollowedArtists from './useCurrentUserFollowedArtists';
import useCurrentUserPlaylists from './useCurrentUserPlaylists';
import useCurrentUserProfile from './useCurrentUserProfile';
import useCurrentUserSavedAlbums from './useCurrentUserSavedAlbums';
import useCurrentUserSavedTracks from './useCurrentUserSavedTracks';

const combiner = (
  userPlaylists: Playlist[],
  userSavedTracks: SavedTrack[],
  userSavedAlbums: SavedAlbum[],
  userFollowedArtists: Artist[],
  userProfile: UserProfile,
) => {
  return formatUserSummary({
    userPlaylists,
    userSavedTracks,
    userSavedAlbums,
    userFollowedArtists,
    userProfile,
  });
};

const useUserSummary = () => {
  const userPlaylists = useCurrentUserPlaylists();
  const userSavedTracks = useCurrentUserSavedTracks();
  const userSavedAlbums = useCurrentUserSavedAlbums();
  const userFollowedArtists = useCurrentUserFollowedArtists();
  const userProfile = useCurrentUserProfile();

  return combineQueries(
    [
      userPlaylists,
      userSavedTracks,
      userSavedAlbums,
      userFollowedArtists,
      userProfile,
    ] as const,
    combiner,
  );
};

export default useUserSummary;
