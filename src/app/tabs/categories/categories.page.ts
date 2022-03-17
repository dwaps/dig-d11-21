import { Component, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

enum Category {
  BUSINESS = 'business',
  ENTERTAINMENT = 'divertissement',
  GENERAL = 'général',
  HEALTH = 'santé',
  SCIENCE = 'science',
  SPORTS = 'sports',
  TECHNOLOGY = 'technologie',
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Category[] = [];
  articles: Article[] = [];
  selected: string = '';

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.categories = Object.values(Category).map(v => v);
    this.selected = this.categories[0];
    this.loadArticlesByCategory(this.selected);
  }

  private getCategoryValue(value: string) {
    const keys = Object.keys(Category);
    const isValueKeyOfEnum = keys.includes(value.toUpperCase());
    return isValueKeyOfEnum
      ? value.toLowerCase()
      : keys.find((key) => Category[key] === value).toLowerCase();
  }

  private loadArticlesByCategory(category: string) {
    const selected = this.getCategoryValue(category);
    this.newsService
      .getTopHeadLinesByCategory(selected)
      .subscribe((articles) => (this.articles = articles));
  }

  segmentChanged(e: any) {
    const selected = this.getCategoryValue(e.detail.value);
    this.loadArticlesByCategory(selected);
  }
}
