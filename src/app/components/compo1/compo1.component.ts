import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Compo1Component implements OnInit, AfterViewInit {

  @ViewChildren('myPar')
  myPar!: QueryList<ElementRef<HTMLElement>>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  showTxt() {
    this.myPar.forEach((p: ElementRef<HTMLElement>) => {
      console.log(p.nativeElement.innerText);
    })
  }

}
