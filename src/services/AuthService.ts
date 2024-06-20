import { generateRandomString } from '@utils/common';

const { VITE_REDIRECT_URI, VITE_CLIENT_ID } = import.meta.env;

const SCOPE = [
  //albums
  'user-library-read',

  //playlists
  'playlist-read-private',

  //users
  'user-read-private',
  'user-read-email',
  'user-follow-read',
];

class AuthService {
  getOauthUrl() {
    const url = 'https://accounts.spotify.com/authorize';

    const query = {
      response_type: 'code',
      client_id: VITE_CLIENT_ID,
      scope: SCOPE.join(' '),
      redirect_uri: VITE_REDIRECT_URI,
      state: generateRandomString(16),
    };

    const queryString = new URLSearchParams(query).toString();

    return `${url}?${queryString}`;
  }
}

export default AuthService;
