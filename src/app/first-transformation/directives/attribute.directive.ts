import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { delay, of, repeat, tap } from 'rxjs';

@Directive({ 
    selector: '[attributeDirective]' 
}) 
export class AttributeDirective implements OnInit { 

    constructor( 
        private elementRef: ElementRef, 
        @Inject(DOCUMENT) private document: Document,
    ) {} 
    
    ngOnInit(): void { 
        const 
            nativeElement: HTMLElement = this.elementRef.nativeElement,
            children = Array.from(nativeElement.childNodes);


        nativeElement.style.borderBottom = '5px solid pink'; 
        nativeElement.style.color = 'pink'; 
        nativeElement.style.boxShadow = 'grey 0px 13px 10px -10px';

        of(nativeElement).pipe(
            delay(2000),
            tap(element => {
                element.replaceChildren(this.document.createTextNode('2.🧒'));
            }),
            delay(2000),
            tap(element => {
                element.replaceChildren(...children);
            }),
            repeat(20)
        ).subscribe();
    }
}

