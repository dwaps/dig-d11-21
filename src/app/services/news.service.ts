import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';

const api = environment.api;
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private _articlesPerPage = {
    page: 1,
    articles: [],
  };
  private _options = {
    params: {
      apiKey: environment.apiKey,
      country: 'fr',
      pageSize: 10,
    },
  };

  constructor(private http: HttpClient) {}

  private buildUrl(query: any = {}) {
    query = Object.keys(query)
      .map((k) => `${k}=${query[k]}`)
      .join('&');
    return api.get(`https://newsapi.org/v2/top-headlines?${query}`);
  }

  public getTopHeadLines(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        this.buildUrl({ page: this._articlesPerPage.page++ }),
        this._options
      )
      .pipe(map((res: NewsResponse) => {
        this._articlesPerPage.articles = [...this._articlesPerPage.articles, ...res.articles];
        return this._articlesPerPage.articles;
      }));
  }

  public getTopHeadLinesByCategory(category: string): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        this.buildUrl({ category }),
        this._options
      )
      .pipe(map((res: NewsResponse) => res.articles));
  }
}
