import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThirdPartyMerchantComponent } from './register-third-party-merchant.component';

describe('RegisterThirdPartyMerchantComponent', () => {
  let component: RegisterThirdPartyMerchantComponent;
  let fixture: ComponentFixture<RegisterThirdPartyMerchantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterThirdPartyMerchantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterThirdPartyMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
