import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstTransformationComponent } from './first-transformation.component';
import { AttributeDirective } from './directives/attribute.directive';

@NgModule({
    declarations: [
        FirstTransformationComponent,
        AttributeDirective
    ],
    imports: [
        CommonModule
    ],
    exports:[
        FirstTransformationComponent,
        AttributeDirective
    ],
})
export class FirstTransformationModule { }
