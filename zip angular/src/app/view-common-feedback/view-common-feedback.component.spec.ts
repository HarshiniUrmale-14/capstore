import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommonFeedbackComponent } from './view-common-feedback.component';

describe('ViewCommonFeedbackComponent', () => {
  let component: ViewCommonFeedbackComponent;
  let fixture: ComponentFixture<ViewCommonFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCommonFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCommonFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
