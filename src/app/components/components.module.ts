import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { HeaderComponent } from './header/header.component';

const components = [HeaderComponent, ArticlesComponent];

@NgModule({
  declarations: [...components, ArticleComponent],
  exports: components,
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
