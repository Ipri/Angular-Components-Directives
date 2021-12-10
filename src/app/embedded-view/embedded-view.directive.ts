import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { delay, Observable, of, switchMap, tap } from 'rxjs';

@Directive({
    selector: '[embeddedView]',
})
export class EmbeddedViewDirective {

    public marker: string = '👋🏻';

    @Input()
    set embeddedView(marker: string) {
        this.marker = marker;
        this.modifyView(marker)
    };

    get embeddedView(): string {
        return this.marker;
    };

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private render: Renderer2
    ) {}

    modifyView(marker: string): void {
        of(marker).pipe(
            switchMap(marker => this.createViewFirst(marker)),
            delay(1000),
            switchMap(marker => this.createViewSecond(marker)),
            delay(1000),
            switchMap(marker => this.createViewThird(marker))
        ).subscribe()
    }

    createViewFirst(marker: string): Observable<any> {
        const 
            view = this.viewContainer.createEmbeddedView(this.templateRef),
            viewRootElem: HTMLElement = view.rootNodes[0],
            startSymbolElem = this.render.createElement('span'),
            endSymbolElem = this.render.createElement('span');

        return of(marker).pipe(
            tap(() => this.render.appendChild(startSymbolElem, this.render.createText(marker))),
            delay(1000),
            tap(() => this.render.appendChild(endSymbolElem, this.render.createText(marker))),
            delay(1000),
            tap(() => this.render.insertBefore(viewRootElem, startSymbolElem, viewRootElem.firstChild)),
            delay(1000),
            tap(() => this.render.appendChild(viewRootElem, endSymbolElem)),
            delay(1000),
            tap(() => this.clearView())
        );
    }

    createViewSecond(marker: string): Observable<any> {
        const 
            view = this.templateRef.createEmbeddedView(this.templateRef),
            viewRootElem: HTMLElement = view.rootNodes[0],
            startSymbolElem = this.render.createElement('span'),
            endSymbolElem = this.render.createElement('span');

        return of(marker as string).pipe(
            tap(() => this.render.appendChild(startSymbolElem, this.render.createText(marker))),
            tap(() => this.render.appendChild(endSymbolElem, this.render.createText(marker))),
            tap(() => this.render.insertBefore(viewRootElem, startSymbolElem, viewRootElem.firstChild)),
            tap(() => this.render.appendChild(viewRootElem, endSymbolElem)),
            delay(1000),
            tap(() => this.viewContainer.insert(view)),
            delay(1000),
            tap(() => this.clearView())
        );
    }

    createViewThird(marker: string): Observable<any> {
        return of(marker).pipe(
            tap(() => this.viewContainer.createEmbeddedView(this.templateRef)),
            delay(1000),
            tap(() => this.viewContainer.createEmbeddedView(this.templateRef)),
            delay(1000),
            tap(() => this.viewContainer.createEmbeddedView(this.templateRef)),
            delay(1000),
            tap(() => this.viewContainer.createEmbeddedView(this.templateRef)),
            delay(1000),
            tap(() => this.viewContainer.remove(this.viewContainer.length - 1)),
            delay(1000),
            tap(() => this.viewContainer.remove(this.viewContainer.length - 1)),
            delay(1000),
            tap(() => this.viewContainer.remove(this.viewContainer.length - 1)),
            delay(1000),
            tap(() => this.viewContainer.remove(this.viewContainer.length - 1)),
            delay(1000),
            tap(() => this.clearView())
        );
    }

    clearView(): void {
        this.viewContainer.clear();
    }
}
