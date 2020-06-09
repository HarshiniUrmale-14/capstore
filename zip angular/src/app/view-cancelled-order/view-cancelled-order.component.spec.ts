import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCancelledOrderComponent } from './view-cancelled-order.component';

describe('ViewCancelledOrderComponent', () => {
  let component: ViewCancelledOrderComponent;
  let fixture: ComponentFixture<ViewCancelledOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCancelledOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCancelledOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
