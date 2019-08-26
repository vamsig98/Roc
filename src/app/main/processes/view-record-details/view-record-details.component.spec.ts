import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordDetailsComponent } from './view-record-details.component';

describe('ViewRecordDetailsComponent', () => {
  let component: ViewRecordDetailsComponent;
  let fixture: ComponentFixture<ViewRecordDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
