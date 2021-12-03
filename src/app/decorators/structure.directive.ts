import { Directive, ElementRef, Optional, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[structureDirective]'
})
export class StructureDirective {

    constructor(
        @Optional() private elementRef: ElementRef,
        @Optional() private templateRef: TemplateRef<any>,
        @Optional() private viewContainerRef: ViewContainerRef,
        @Optional() private renderer: Renderer2,
    ) { 
        console.log(templateRef);
        if (new Date().getHours() < 21) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, { marker: 'DDDD' });
        } else {
            this.renderer.appendChild(
                this.elementRef.nativeElement.parentElement,
                this.renderer.createText('Too late')
            );
        }
    }
}
