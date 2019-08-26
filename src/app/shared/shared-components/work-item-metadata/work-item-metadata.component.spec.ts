import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemMetadataComponent } from './work-item-metadata.component';

describe('WorkItemMetadataComponent', () => {
  let component: WorkItemMetadataComponent;
  let fixture: ComponentFixture<WorkItemMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkItemMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
