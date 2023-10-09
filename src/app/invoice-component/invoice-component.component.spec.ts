import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceComponentComponent } from './invoice-component.component';

describe('InvoiceComponentComponent', () => {
  let component: InvoiceComponentComponent;
  let fixture: ComponentFixture<InvoiceComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvoiceComponentComponent]
    });
    fixture = TestBed.createComponent(InvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
