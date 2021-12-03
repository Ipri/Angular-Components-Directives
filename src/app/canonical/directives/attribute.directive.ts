import { Directive, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
    selector: '[attributeDirective]' 
}) 
export class AttributeDirective { 

    constructor( 
        private elementRef: ElementRef, 
        private renderer: Renderer2
    ) { 
        //this.elementRef.nativeElement.style.backgroundColor = 'chocolate'; 
        this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'chocolate') 
    } 
    
}

