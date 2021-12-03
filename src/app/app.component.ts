import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, QueryList, ViewChildren } from '@angular/core';
import { BaseDecorator } from './decorators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

    title = 'angular-article';
    firstMarker="$";
    secondMarker="@";
    thirdMarker="%";
    fifthMarker="*";

    constructor(
        private cdr: ChangeDetectorRef
    ) {}

    ngAfterViewInit(): void {
        // console.log(this.decorators);
        // setTimeout(() => {
        //     this.firstMarker = '^';
        //     this.secondMarker = '__';
        //     this.thirdMarker = '*';
        //     this.cdr.markForCheck();
        // }, 5000);
    }

    @ViewChildren(BaseDecorator) 
    public decorators: QueryList<BaseDecorator> | undefined;
}
