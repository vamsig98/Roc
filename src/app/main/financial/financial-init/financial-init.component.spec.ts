import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInitComponent } from './financial-init.component';

describe('FinancialInitComponent', () => {
  let component: FinancialInitComponent;
  let fixture: ComponentFixture<FinancialInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
