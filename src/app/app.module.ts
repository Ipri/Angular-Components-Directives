import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanonicalModule } from './canonical/canonical.module';
import { FirstDecoratorComponent, FourthDecoratorComponent, SecondDecoratorComponent, ThirdDecoratorDirective, FifthDecoratorDirective } from './decorators';
// import { AttributeDirective } from './decorators/attribute.directive';
// import { StructureDirective } from './decorators/structure.directive';
import { LabelComponent } from './label/label.component';



@NgModule({
    declarations: [
        AppComponent,
        FirstDecoratorComponent,
        SecondDecoratorComponent,
        ThirdDecoratorDirective,
        FourthDecoratorComponent,
        FifthDecoratorDirective,
        // AttributeDirective,
        // StructureDirective,
        LabelComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CanonicalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
