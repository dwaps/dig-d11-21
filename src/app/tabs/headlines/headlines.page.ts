import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {
  articles: Article[] = [];
  endLoading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .getTopHeadLines()
      .subscribe(articles => {
        this.articles = articles;
      });
  }

  loadArticles(e: any) {
    if (!this.endLoading) {
      this.newsService
        .getTopHeadLines()
        .subscribe(articles => {
          if (articles.length === this.articles.length) {
            this.endLoading = true;
            e.target.disabled = true;
            return;
          }
          this.articles = articles;
          e.target.complete();
        });
    }
  }

}
