import { Component, Input, OnInit } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Browser } from '@capacitor/browser';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | null = null;
  @Input() num: string = '';

  constructor(
    private actionSheetController: ActionSheetController,
    private socialSharing: SocialSharing,
    private platform: Platform
  ) { }

  ngOnInit() { }

  async openMenu() {
    const buttons = [
      {
        text: 'Favori',
        icon: 'heart-outline',
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
    console.log("onToggleFavorite");
  }

}
