import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacedOrderComponent } from './view-placed-order.component';

describe('ViewPlacedOrderComponent', () => {
  let component: ViewPlacedOrderComponent;
  let fixture: ComponentFixture<ViewPlacedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlacedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
