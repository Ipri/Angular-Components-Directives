import { ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { Decorator } from '../decorator.model';


@Component({
  selector: '[fourthDecorator]',
  templateUrl: './fourth-decorator.component.html',
  styleUrls: ['./fourth-decorator.component.scss']
})
export class FourthDecoratorComponent implements Decorator {

    marker: string = '';

    @Input()
    set fourthDecorator(value: string) {
        this.marker = value;
        this.cdr.markForCheck();
    };
    get fourthDecorator(): string {
        return this.marker;
    }

    get template() {
        return this.templateRef
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private cdr: ChangeDetectorRef,
    ){}

    detach(): void {};

}
