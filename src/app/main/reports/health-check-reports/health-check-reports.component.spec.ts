import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckReportsComponent } from './health-check-reports.component';

describe('HealthCheckReportsComponent', () => {
  let component: HealthCheckReportsComponent;
  let fixture: ComponentFixture<HealthCheckReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthCheckReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCheckReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
