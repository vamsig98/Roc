import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkItemsComponent } from './completed-work-items.component';

describe('CompletedWorkItemsComponent', () => {
  let component: CompletedWorkItemsComponent;
  let fixture: ComponentFixture<CompletedWorkItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWorkItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
