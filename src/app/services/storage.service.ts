import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export const STORAGE_KEY_FAVORITES = 'favorites';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage|null = null;

  constructor(private storageService: Storage) {
    this.init();
  }

  private async init() {
    this._storage = await this.storageService.create();
  }

  public set(key: string, value: any) {
    this._storage.set(key, value);
  }

  public get(key: string) {
    return this._storage.get(key);
  }
}
