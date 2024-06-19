import { generateRandomString } from '@utils/common';

const { VITE_REDIRECT_URI, VITE_CLIENT_ID } = import.meta.env;

class AuthService {
  getOauthUrl() {
    const url = 'https://accounts.spotify.com/authorize';

    const query = {
      response_type: 'code',
      client_id: VITE_CLIENT_ID,
      scope: ['user-read-private', 'user-read-email'].join(' '),
      redirect_uri: VITE_REDIRECT_URI,
      state: generateRandomString(16),
    };

    const queryString = new URLSearchParams(query).toString();

    return `${url}?${queryString}`;
  }
}

export default AuthService;
