import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = environment.apiKey;
  private options = {
    params: {
      apiKey: this.apiKey,
    },
  };

  constructor(private http: HttpClient) {}

  private buildUrl(query: any) {
    query = Object.keys(query)
      .map((k) => `${k}=${query[k]}&`)
      .join('')
      .slice(0, -1);
    return `https://newsapi.org/v2/top-headlines?${query}`;
  }

  public getTopHeadLines(): Observable<NewsResponse> {
    return this.http
      .get<NewsResponse>(
        this.buildUrl({
          sources: 'bbc-news',
        }),
        this.options
      )
      .pipe(map((res: any) => res.articles));
  }
}
