import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  get favorites() {
    return this.favoritesService.localFavorites;
  }

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit() {}

}
