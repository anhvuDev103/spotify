import http from '@helpers/http';
import {
  FollowedArtists,
  Page,
  Playlist,
  SavedAlbum,
  SavedTrack,
  UserProfile,
} from '@spotify/web-api-ts-sdk';

class UiUserService {
  async getCurrentUserPlaylists() {
    const { items } = await http.get<never, Page<Playlist>>('/me/playlists');

    return items;
  }

  async getCurrentUserSavedTracks() {
    const { items } = await http.get<never, Page<SavedTrack>>('/me/tracks');

    return items;
  }

  async getCurrentUserSavedAlbums() {
    const { items } = await http.get<never, Page<SavedAlbum>>('/me/albums');

    return items;
  }

  async getCurrentUserFollowedArtists() {
    const { artists } = await http.get<never, FollowedArtists>(
      '/me/following',
      {
        params: {
          type: 'artist',
        },
      },
    );

    return artists.items;
  }

  async getCurrentUserProfile() {
    return http.get<never, UserProfile>('/me');
  }
}

export default UiUserService;
