import http from '@helpers/http';
import { Categories, FeaturedPlaylists } from '@spotify/web-api-ts-sdk';

class UiHomeService {
  async getFeaturedPlaylists() {
    const { playlists } = await http.get<never, FeaturedPlaylists>(
      '/browse/featured-playlists',
    );

    return playlists.items;
  }

  async getSeveralBrowseCategories() {
    const { categories } = await http.get<never, Categories>(
      '/browse/categories',
    );

    return categories.items;
  }

  async getPlaylistsByCategoryId(categoryId: string) {
    return http.get<never, FeaturedPlaylists>(
      `/browse/categories/${categoryId}/playlists`,
    );
  }
}

export default UiHomeService;
