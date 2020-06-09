import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerListToVerifyComponent } from './view-customer-list-to-verify.component';

describe('ViewCustomerListToVerifyComponent', () => {
  let component: ViewCustomerListToVerifyComponent;
  let fixture: ComponentFixture<ViewCustomerListToVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerListToVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerListToVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
