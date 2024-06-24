import http from '@helpers/http';
import { Categories, FeaturedPlaylists } from '@spotify/web-api-ts-sdk';

class UiHomeService {
  async getFeaturedPlaylists() {
    return http.get<never, FeaturedPlaylists>('/browse/featured-playlists');
  }

  async getSeveralBrowseCategories() {
    return http.get<never, Categories>('/browse/categories');
  }

  async getPlaylistsByCategoryId(categoryId: string) {
    return http.get<never, FeaturedPlaylists>(
      `/browse/categories/${categoryId}/playlists`,
    );
  }
}

export default UiHomeService;
