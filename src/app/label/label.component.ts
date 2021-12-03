import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: '<h3>{{ text }}</h3>',
})
export class LabelComponent {

    @Input()
    text: string = '';

}
