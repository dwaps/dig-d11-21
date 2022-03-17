import { Injectable } from '@angular/core';
import { Article } from '../interfaces';
import { StorageService, STORAGE_KEY_FAVORITES } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private _localFavorites: Article[] = [];

  public get localFavorites(): Article[] {
    return [...this._localFavorites];
  }

  constructor(private storage: StorageService) {
    this.loadFavorites();
  }

  public async loadFavorites() {
    try {
      const favorites = await this.storage.get(STORAGE_KEY_FAVORITES);
      this._localFavorites = favorites || [];
    }
    catch (e) {}
  }

  public saveRemoveFavorite(favorite: Article) {
    const exists = this._localFavorites.includes(favorite);
    if (exists) {
      this._localFavorites = this._localFavorites.filter(art => art !== favorite);
    }
    else {
      this._localFavorites = [favorite, ...this._localFavorites];
    }
    this.storage.set(STORAGE_KEY_FAVORITES, this._localFavorites);
  }

  public isFavorite(article: Article) {
    return !!this._localFavorites.find(art => art === article);
  }
}
