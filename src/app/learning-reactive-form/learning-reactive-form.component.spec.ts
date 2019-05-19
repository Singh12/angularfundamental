import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningReactiveFormComponent } from './learning-reactive-form.component';

describe('LearningReactiveFormComponent', () => {
  let component: LearningReactiveFormComponent;
  let fixture: ComponentFixture<LearningReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
