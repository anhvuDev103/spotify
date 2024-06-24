import {
  Artist,
  Playlist,
  SavedAlbum,
  SavedTrack,
} from '@spotify/web-api-ts-sdk';
import { formatUserSummary } from '@utils/formatters/user';
import { combineQueries } from '@utils/queries';

import useCurrentUserFollowedArtists from './useCurrentUserFollowedArtists';
import useCurrentUserPlaylists from './useCurrentUserPlaylists';
import useCurrentUserSavedAlbums from './useCurrentUserSavedAlbums';
import useCurrentUserSavedTracks from './useCurrentUserSavedTracks';

const combiner = (
  userPlaylists: Playlist[],
  userSavedTracks: SavedTrack[],
  userSavedAlbums: SavedAlbum[],
  userFollowedArtists: Artist[],
) => {
  return formatUserSummary({
    userPlaylists,
    userSavedTracks,
    userSavedAlbums,
    userFollowedArtists,
  });
};

const useUserSummary = () => {
  const userPlaylists = useCurrentUserPlaylists();
  const userSavedTracks = useCurrentUserSavedTracks();
  const userSavedAlbums = useCurrentUserSavedAlbums();
  const userFollowedArtists = useCurrentUserFollowedArtists();

  return combineQueries(
    [
      userPlaylists,
      userSavedTracks,
      userSavedAlbums,
      userFollowedArtists,
    ] as const,
    combiner,
  );
};

export default useUserSummary;