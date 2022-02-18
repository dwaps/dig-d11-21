import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const modules = [
  FooterComponent,
  HeaderComponent
];

@NgModule({
  declarations: modules,
  exports: [...modules, CommonModule],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
