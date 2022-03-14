import { Component, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: string[] = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  selected: string = this.categories[0];

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(e: CustomEvent<IonSegment>) {
    console.log(e.detail.value);
  }

}
