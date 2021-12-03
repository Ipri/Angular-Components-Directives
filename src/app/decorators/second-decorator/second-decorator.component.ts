import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { BaseDecorator, Decorator } from '../decorator.model';

@Component({
  selector: '[secondDecorator]',
  templateUrl: './second-decorator.component.html',
  styleUrls: ['./second-decorator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: BaseDecorator, useExisting: forwardRef(() => SecondDecoratorComponent)}]
})
export class SecondDecoratorComponent implements Decorator  {
    
    marker: string = '';

    @Input()
    set secondDecorator(value: string) {
        this.marker = value;
    };
    get secondDecorator(): string {
        return this.marker;
    }

    detach(): void {};
}
