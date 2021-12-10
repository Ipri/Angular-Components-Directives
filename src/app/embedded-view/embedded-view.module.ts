import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedViewComponent } from './embedded-view.component';
import { EmbeddedViewDirective } from './embedded-view.directive';



@NgModule({
  declarations: [EmbeddedViewComponent, EmbeddedViewDirective],
  imports: [
    CommonModule
  ]
})
export class EmbeddedViewModule { }
