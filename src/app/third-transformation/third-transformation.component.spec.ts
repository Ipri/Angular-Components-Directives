import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTransformationComponent } from './third-transformation.component';

describe('ThirdTransformationComponent', () => {
  let component: ThirdTransformationComponent;
  let fixture: ComponentFixture<ThirdTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdTransformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
