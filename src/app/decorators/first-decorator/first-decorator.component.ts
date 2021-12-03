import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Input, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { BaseDecorator, Decorator } from '../decorator.model';


@Component({
    selector: '[firstDecorator]',
    templateUrl: './first-decorator.component.html',
    styleUrls: ['./first-decorator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: BaseDecorator, useExisting: forwardRef(() => FirstDecoratorComponent)}]
})
export class FirstDecoratorComponent implements Decorator {

    marker: string = '';

    @Input()
    set firstDecorator(value: string) {
        this.marker = value;
    };
    get firstDecorator(): string {
        return this.marker;
    }


    constructor(
        @Optional() private templateRef: TemplateRef<any>,
        @Optional() private viewContainerRef: ViewContainerRef,
        @Optional() private elementRef: ElementRef,
    ) {
        console.log('templateRef', templateRef);
        console.log('viewContainerRef', viewContainerRef);
        console.log('elementRef', elementRef);
    }

    detach(): void {};

}
