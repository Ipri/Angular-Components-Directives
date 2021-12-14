import { DOCUMENT } from '@angular/common';
import { ComponentRef, Directive, ElementRef, Inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay, map, of, repeat, tap } from 'rxjs';
import { LabelComponent } from '../../label/label.component';

@Directive({ 
    selector: '[attributeDirective]' 
}) 
export class AttributeDirective implements OnInit { 

    @Input()
    public attributeDirective: TemplateRef<any> | undefined;

    constructor( 
        private elementRef: ElementRef, 
        private viewContainerRef: ViewContainerRef,
        @Inject(DOCUMENT) private document: Document,
    ) {} 
    
    ngOnInit(): void { 
        const 
            nativeElement: HTMLElement = this.elementRef.nativeElement,
            nativeParent: HTMLElement = nativeElement.parentElement as HTMLElement,
            children = Array.from(nativeElement.childNodes);

        nativeElement.style.borderBottom = '5px solid pink'; 
        nativeElement.style.color = 'pink';
        nativeElement.style.boxShadow = 'grey 0px 13px 10px -10px';

        of(nativeElement).pipe(
            delay(2000),
            tap(nativeElement => {
                nativeElement.replaceChildren(this.document.createTextNode('2.🧒'));
            }),
            delay(2000),
            map(nativeElement => {
                nativeElement.remove();
                const labelComponentRef = this.viewContainerRef.createComponent(LabelComponent)
                labelComponentRef.instance.text = "3. 👩‍🦰"
                return labelComponentRef;
            }),
            delay(2000),
            map((labelComponentRef: ComponentRef<LabelComponent>) => {
                labelComponentRef.destroy();
                this.viewContainerRef.createEmbeddedView(
                    this.attributeDirective as TemplateRef<any>, 
                    { text: '4.👸' }
                );
                return this.viewContainerRef;
            }),
            delay(2000),
            tap(viewContainerRef => {
                viewContainerRef.clear();
                nativeElement.replaceChildren(...children);
                nativeParent.appendChild(nativeElement);  
            }),
            repeat(20)
        ).subscribe();
    }
}

