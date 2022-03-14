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
  categories: Category[] = [
    Category.BUSINESS,
    Category.ENTERTAINMENT,
    Category.GENERAL,
    Category.HEALTH,
    Category.SCIENCE,
    Category.SPORTS,
    Category.TECHNOLOGY,
  ];
  articles: Article[] = [];
  selected: string = this.categories[0];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadArticlesByCategory(this.selected);
  }

  private getCategoryValue(value: string) {
    const keys = Object.keys(Category);
    const isValueKeyOfEnum = keys.includes(value.toUpperCase());
    return isValueKeyOfEnum
      ? value.toLowerCase()
      : keys.find((key) => Category[key] === value);
  }

  private loadArticlesByCategory(category: string) {
    const selected = this.getCategoryValue(category);
    this.newsService
      .getTopHeadLinesByCategory(selected)
      .subscribe((articles) => (this.articles = articles));
  }

  segmentChanged(e: CustomEvent<IonSegment>) {
    const selected = this.getCategoryValue(e.detail.value);
    this.loadArticlesByCategory(selected);
  }
}
