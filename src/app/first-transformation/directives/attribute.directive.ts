import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Directive({ 
    selector: '[attributeDirective]' 
}) 
export class AttributeDirective implements OnInit { 

    constructor( 
        private elementRef: ElementRef, 
        @Inject(DOCUMENT) private document: Document,
    ) {} 
    
    ngOnInit(): void { 
        const nativeElement = this.elementRef.nativeElement;

        nativeElement.style.backgroundColor = 'chocolate'; 

        of(null).pipe(
            delay(3000),
            tap(() => {
                nativeElement.replaceChildren(this.document.createTextNode('First transformation'));
            }),
        ).subscribe();
    }
}

