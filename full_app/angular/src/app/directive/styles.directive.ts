import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyles]',
  standalone: true
})
export class StylesDirective {

  constructor() { }
  @HostBinding("style.backgroundColor")
  bgColor="red"
}
