import { Directive, ElementRef, Renderer2, } from '@angular/core';
import { delay, interval, tap } from 'rxjs';

@Directive({ 
    selector: '[attributeDirective]' 
}) 
export class AttributeDirective { 

    constructor( 
        private elementRef: ElementRef, 
        private renderer: Renderer2
    ) { 
        
        interval(1000).pipe(
            delay(Math.random()*1000),
            tap(() => {
                //this.elementRef.nativeElement.style.backgroundColor = 'chocolate'; 
                this.renderer.setStyle(
                    this.elementRef.nativeElement, 
                    'backgroundColor', 
                    `#${Math.floor((Math.random()*10000000)).toString(16)}`
                );
            }),
        ).subscribe();
    } 
    
}

