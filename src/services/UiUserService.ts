import http from '@helpers/http';

class UiUserService {
  async getCurrentUserPlaylists() {
    return http.get('https://api.spotify.com/v1/me/playlists');
  }
}

export default UiUserService;
