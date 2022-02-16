import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Compo2Component } from '../compo2/compo2.component';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Compo1Component implements OnInit, AfterViewInit {

  @ViewChild('title')
  title!: ElementRef<HTMLElement>;

  @ViewChild('child')
  compo2!: Compo2Component;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.title.nativeElement.innerText = 'Double de 4 = ' + this.compo2.double(4);
  }

}
