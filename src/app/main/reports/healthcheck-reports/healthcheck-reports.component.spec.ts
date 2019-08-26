import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcheckReportsComponent } from './healthcheck-reports.component';

describe('HealthcheckReportsComponent', () => {
  let component: HealthcheckReportsComponent;
  let fixture: ComponentFixture<HealthcheckReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcheckReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcheckReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
