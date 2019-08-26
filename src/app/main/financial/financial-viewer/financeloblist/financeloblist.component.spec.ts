import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceloblistComponent } from './financeloblist.component';

describe('FinanceloblistComponent', () => {
  let component: FinanceloblistComponent;
  let fixture: ComponentFixture<FinanceloblistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceloblistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceloblistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
