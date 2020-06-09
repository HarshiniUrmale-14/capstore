import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerchantListToVerifyComponent } from './view-merchant-list-to-verify.component';

describe('ViewMerchantListToVerifyComponent', () => {
  let component: ViewMerchantListToVerifyComponent;
  let fixture: ComponentFixture<ViewMerchantListToVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMerchantListToVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMerchantListToVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
