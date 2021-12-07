import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondTransformationComponent } from './second-transformation.component';
import { LabelComponent } from '../label/label.component';
import { AttributeDirective } from './directives/attribute.directive';



@NgModule({
    declarations: [
        SecondTransformationComponent,
        LabelComponent,
        AttributeDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SecondTransformationComponent,
        LabelComponent,
        AttributeDirective
    ]
})
export class SecondTransformationModule { }
