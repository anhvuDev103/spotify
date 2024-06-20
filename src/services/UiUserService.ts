import http from '@helpers/http';
import {
  FollowedArtists,
  Page,
  Playlist,
  SavedAlbum,
  SavedTrack,
} from '@spotify/web-api-ts-sdk';

class UiUserService {
  async getCurrentUserPlaylists() {
    return http.get<never, Page<Playlist>>('/me/playlists');
  }

  async getCurrentUserSavedTracks() {
    return http.get<never, Page<SavedTrack>>('/me/tracks');
  }

  async getCurrentUserSavedAlbums() {
    return http.get<never, Page<SavedAlbum>>('/me/albums');
  }

  async getCurrentUserFollowedArtists() {
    return http.get<never, FollowedArtists>('/me/following', {
      params: {
        type: 'artist',
      },
    });
  }
}

export default UiUserService;
