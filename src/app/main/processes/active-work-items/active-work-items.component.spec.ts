import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkItemsComponent } from './active-work-items.component';

describe('ActiveWorkItemsComponent', () => {
  let component: ActiveWorkItemsComponent;
  let fixture: ComponentFixture<ActiveWorkItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveWorkItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveWorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
