import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompletedWorkItemsComponent } from './incompleted-work-items.component';

describe('IncompletedWorkItemsComponent', () => {
  let component: IncompletedWorkItemsComponent;
  let fixture: ComponentFixture<IncompletedWorkItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncompletedWorkItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompletedWorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
