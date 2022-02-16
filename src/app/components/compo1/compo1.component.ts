import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Compo2Component } from '../compo2/compo2.component';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Compo1Component implements OnInit, AfterViewInit {

  @ViewChildren('myPar')
  myPar!: QueryList<ElementRef<HTMLElement>>;

  @ViewChildren(Compo2Component)
  children!: QueryList<Compo2Component>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  showTxt() {
    let count = 0;
    this.children.forEach((c2: Compo2Component) => {
      console.log(
        c2.double(++count)
      );
    })
  }

}
