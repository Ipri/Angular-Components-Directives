import { Directive, forwardRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BaseDecorator, Decorator } from './decorator.model';

@Directive({
    selector: '[thirdDecorator]',
    providers: [{provide: BaseDecorator, useExisting: forwardRef(() => ThirdDecoratorDirective)}]
})
export class ThirdDecoratorDirective implements Decorator {
    public marker: string = '';

    @Input()
    set thirdDecorator(marker: string) {
        this.marker = marker;
        this.clearView();
        this.createView(marker);
    };

    get thirdDecorator(): string {
        return this.marker;
    };

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private render: Renderer2
    ) {}

    createView(marker: string): void {
        const 
            // view = this.viewContainer.createEmbeddedView(this.templateRef), // insert template into HTML immediately
            view = this.templateRef.createEmbeddedView(this.templateRef),
            viewRootElem: HTMLElement = view.rootNodes[0],
            startSymbolElem = this.render.createElement('span'),
            endSymbolElem = this.render.createElement('span');

            this.render.appendChild(startSymbolElem, this.render.createText(marker));
            this.render.appendChild(endSymbolElem, this.render.createText(marker));
            this.render.insertBefore(viewRootElem, startSymbolElem, viewRootElem.firstChild)
            this.render.appendChild(viewRootElem, endSymbolElem);
            this.viewContainer.insert(view);
    }

    clearView(): void {
        this.viewContainer.clear();
    }

    detach():void {

    };

}
