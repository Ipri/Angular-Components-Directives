import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanonicalComponent } from './canonical.component';
import { AttributeDirective } from './directives/attribute.directive';
import { StructureDirective } from './directives/structure.directive';

@NgModule({
    declarations: [CanonicalComponent, AttributeDirective, StructureDirective],
    imports: [
        CommonModule
    ],
    exports: [CanonicalComponent, AttributeDirective, StructureDirective],
})
export class CanonicalModule { }
