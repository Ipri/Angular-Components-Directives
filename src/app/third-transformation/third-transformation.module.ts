import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdTransformationComponent } from './third-transformation.component';
import { AttributeDirective } from './directives/attribute.directive';



@NgModule({
    declarations: [
        ThirdTransformationComponent,
        AttributeDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ThirdTransformationComponent,
        AttributeDirective
    ]
})
export class ThirdTransformationModule { }
