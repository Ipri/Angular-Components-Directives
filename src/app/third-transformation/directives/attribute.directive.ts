import { DOCUMENT } from '@angular/common';
import { ComponentRef, Directive, ElementRef, Inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay, map, of, tap } from 'rxjs';
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
        const nativeElement = this.elementRef.nativeElement;

        nativeElement.style.backgroundColor = 'chocolate'; 

        of(nativeElement).pipe(
            delay(3000),
            tap(nativeElement => {
                nativeElement.replaceChildren(this.document.createTextNode('First transformation'));
            }),
            delay(3000),
            map(nativeElement => {
                nativeElement.remove();
                const labelComponentRef = this.viewContainerRef.createComponent(LabelComponent)
                labelComponentRef.instance.text = 'Second transformation'
                return labelComponentRef;
            }),
            delay(3000),
            tap((labelComponentRef: ComponentRef<LabelComponent>) => {
                labelComponentRef.destroy();
                this.viewContainerRef.createEmbeddedView(
                    this.attributeDirective as TemplateRef<any>, 
                    { text: 'Third transformation' }
                );
            }),
        ).subscribe();
    }
}

