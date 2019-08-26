import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialViewerComponent } from './financial-viewer.component';

describe('FinancialViewerComponent', () => {
  let component: FinancialViewerComponent;
  let fixture: ComponentFixture<FinancialViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
