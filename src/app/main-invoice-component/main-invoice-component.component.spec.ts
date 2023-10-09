import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInvoiceComponentComponent } from './main-invoice-component.component';

describe('MainInvoiceComponentComponent', () => {
  let component: MainInvoiceComponentComponent;
  let fixture: ComponentFixture<MainInvoiceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainInvoiceComponentComponent]
    });
    fixture = TestBed.createComponent(MainInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
