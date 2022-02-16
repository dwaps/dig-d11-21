import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css'],
})
export class Compo2Component implements AfterContentInit {

  @ContentChild('projectedTitle')
  title!: ElementRef<HTMLHeadingElement>;

  ngAfterContentInit() {
    console.log(this.title?.nativeElement?.innerText);
  }

}
