import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanonicalModule } from './canonical/canonical.module';
import { FirstDecoratorComponent, FourthDecoratorComponent, SecondDecoratorComponent, ThirdDecoratorDirective, FifthDecoratorDirective } from './decorators';
import { FirstTransformationModule } from './first-transformation/first-transformation.module';
import { SecondTransformationModule } from './second-transformation/second-transformation.module';
import { ThirdTransformationModule } from './third-transformation/third-transformation.module';
// import { AttributeDirective } from './decorators/attribute.directive';
// import { StructureDirective } from './decorators/structure.directive';
// import { LabelComponent } from './first-transformation/label/label.component';



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
        // LabelComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CanonicalModule,
        FirstTransformationModule,
        SecondTransformationModule,
        ThirdTransformationModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
