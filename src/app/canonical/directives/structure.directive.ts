import { ChangeDetectorRef, Directive, TemplateRef, ViewContainerRef } from "@angular/core";
import { delay, interval, take, tap, timer } from "rxjs";

@Directive({ 
    selector: '[structureDirective]' 
}) 
export class StructureDirective { 
    
    constructor( 
        private templateRef: TemplateRef<any>, 
        private viewContainerRef: ViewContainerRef, 
    ) { 
        interval(1000).pipe(
            delay(Math.random()*1000),
            tap(() => {
                const view = this.viewContainerRef.get(0);
                if (view) {
                    this.viewContainerRef.clear()
                } else {
                    this.viewContainerRef.createEmbeddedView(this.templateRef)
                }
            }),
        ).subscribe();
    } 
}
