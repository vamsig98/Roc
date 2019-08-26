import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsTimelineComponent } from './logs-timeline.component';

describe('LogsTimelineComponent', () => {
  let component: LogsTimelineComponent;
  let fixture: ComponentFixture<LogsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
