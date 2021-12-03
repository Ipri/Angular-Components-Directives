import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { LabelComponent } from '../label/label.component';

@Directive({
  selector: '[attributeDirective]'
})
export class AttributeDirective implements OnInit {

    @Input()
    public attributeDirective: TemplateRef<any> | string = '';


    get isTemplate(): boolean {
        return this.attributeDirective instanceof TemplateRef;
    }
    
    constructor(
        private elementRef: ElementRef,
        private viewContainerRef: ViewContainerRef,
    ) {}

    ngOnInit(): void {
        const 
            nativeElement = this.elementRef.nativeElement,
            hours = 11; new Date().getHours();

        nativeElement.style.backgroundColor = 'chocolate';

        if (hours > 21) {
            nativeElement.replaceChildren(document.createTextNode('Too late'));
        }

        if (hours < 5) {
            nativeElement.remove();
            const labelComponentRef = this.viewContainerRef.createComponent(LabelComponent)
            labelComponentRef.instance.text = 'Too early'
        }

        if (hours === 11 && this.isTemplate) {
            nativeElement.remove();
            this.viewContainerRef.createEmbeddedView(this.attributeDirective as TemplateRef<any>, { text: 'On time' })
        }
    }
}


