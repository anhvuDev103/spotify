import http from '@helpers/http';
import { Categories, FeaturedPlaylists } from '@spotify/web-api-ts-sdk';
import { RequestParams } from '@utils/types';

class UiHomeService {
  async getFeaturedPlaylists() {
    const { playlists } = await http.get<never, FeaturedPlaylists>(
      '/browse/featured-playlists',
    );

    return playlists.items;
  }

  async getSeveralBrowseCategories(params?: RequestParams) {
    const { categories } = await http.get<never, Categories>(
      '/browse/categories',
      {
        params,
      },
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
