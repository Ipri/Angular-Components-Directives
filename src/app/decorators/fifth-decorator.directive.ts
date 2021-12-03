import { Directive, ElementRef, forwardRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { BaseDecorator, Decorator } from './decorator.model';

@Directive({
  selector: 'fifth-decorator',
  providers: [{provide: BaseDecorator, useExisting: forwardRef(() => FifthDecoratorDirective)}]
})
export class FifthDecoratorDirective implements Decorator, OnChanges  {
    
    @Input()
    marker: string = '';

    constructor(
        private elemRef: ElementRef,
        private render: Renderer2
    ) { }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['marker']) {
            this.createView(changes['marker'].currentValue);
        }
    }

    createView(marker: string): void {
        const 
            render = this.render,
            hostElem = this.elemRef.nativeElement,
            hostChildren = hostElem.childNodes,
            wrapperElem = this.render.createElement('span'),
            startSymbolElem = this.render.createElement('span'),
            endSymbolElem = this.render.createElement('span');

        render.appendChild(startSymbolElem, this.render.createText(marker));
        render.appendChild(endSymbolElem, this.render.createText(marker));

        render.appendChild(wrapperElem, startSymbolElem);
        hostChildren.forEach((elem: Node) => render.appendChild(wrapperElem, elem));
        render.appendChild(wrapperElem, endSymbolElem);
        render.appendChild(hostElem, wrapperElem);
    }

    detach():void {

    };
}

