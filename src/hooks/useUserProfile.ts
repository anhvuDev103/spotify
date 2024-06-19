import http from '@helpers/http';
import { useEffect } from 'react';

const useUserProfile = () => {
  useEffect(() => {
    (async () => {
      const { data } = await http.get(
        'https://api.spotify.com/v1/me/playlists',
      );
      console.log('>> Check | data:', data);
    })();
  }, []);
};

export default useUserProfile;
