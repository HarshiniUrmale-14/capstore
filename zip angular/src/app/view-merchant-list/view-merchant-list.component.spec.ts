import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMerchantListComponent } from './view-merchant-list.component';

describe('ViewMerchantListComponent', () => {
  let component: ViewMerchantListComponent;
  let fixture: ComponentFixture<ViewMerchantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMerchantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMerchantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
