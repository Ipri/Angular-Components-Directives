import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTransformationComponent } from './second-transformation.component';

describe('SecondTransformationComponent', () => {
  let component: SecondTransformationComponent;
  let fixture: ComponentFixture<SecondTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTransformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
