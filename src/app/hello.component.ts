import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>The {{name}}</h1>`,
  styles: [`h1 { font-weight: normal; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
