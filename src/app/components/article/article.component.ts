import { Component, Input, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Browser } from '@capacitor/browser';
import { ActionSheetController, ActionSheetButton, Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | null = null;
  @Input() num: string = '';

  isFavorite: boolean = false;
  showImage: boolean = true;

  constructor(
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private platform: Platform,
    private favoriteService: FavoritesService
  ) { }

  ngOnInit() { }

  async openMenu() {
    this.isFavorite = this.favoriteService.isFavorite(this.article);

    const buttons: ActionSheetButton[] = [
      {
        text: (this.isFavorite? '' : 'Définir comme ') + 'Favori',
        icon: this.isFavorite? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite(),
      },
      {
        text: 'Annuler',
        icon: 'close-outline',
        role: 'cancel',
        cssClass: 'danger',
      }
    ];

    if (this.platform.is('capacitor')) {
      buttons.unshift({
        text: 'Partager',
        icon: 'share-outline',
        handler: () => this.onShareArticle(),
      });
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Options de l\'article',
      cssClass: 'action-sheet-primary',
      buttons
    });

    actionSheet.present();
  }

  openArticle() {
    Browser.open({ url: this.article.url });
  }

  onShareArticle() {
    const { title, source, url } = this.article;
    this.socialSharing.share(title, source.name, null, url);
  }

  onToggleFavorite() {
    this.favoriteService.saveRemoveFavorite(this.article);
  }

}
