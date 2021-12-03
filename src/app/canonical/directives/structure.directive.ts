import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({ 
    selector: '[structureDirective]' 
}) 
export class StructureDirective { 
    
    constructor( 
        private templateRef: TemplateRef<any>, 
        private viewContainerRef: ViewContainerRef, 
    ) { 
        if (new Date().getHours() < 21) { 
            this.viewContainerRef.createEmbeddedView(this.templateRef); 
        } 
    } 
}
