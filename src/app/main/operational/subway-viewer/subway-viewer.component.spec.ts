import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayViewerComponent } from './subway-viewer.component';
import { RouterModule } from '@angular/router';

describe('SubwayViewerComponent', () => {
  let component: SubwayViewerComponent;
  let fixture: ComponentFixture<SubwayViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwayViewerComponent ],
      imports:[RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
