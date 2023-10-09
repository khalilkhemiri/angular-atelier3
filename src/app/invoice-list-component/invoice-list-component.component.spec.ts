import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListComponentComponent } from './invoice-list-component.component';

describe('InvoiceListComponentComponent', () => {
  let component: InvoiceListComponentComponent;
  let fixture: ComponentFixture<InvoiceListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceListComponentComponent]
    });
    fixture = TestBed.createComponent(InvoiceListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
