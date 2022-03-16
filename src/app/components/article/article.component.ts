import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Article } from 'src/app/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article | null = null;
  @Input() num: string = '';

  constructor() { }

  ngOnInit() { }

  openMenu() {
  }

  openArticle() {
    Browser.open({ url: this.article.url });
  }

}
