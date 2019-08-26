import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesandsupportComponent } from './resourcesandsupport.component';

describe('ResourcesandsupportComponent', () => {
  let component: ResourcesandsupportComponent;
  let fixture: ComponentFixture<ResourcesandsupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesandsupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesandsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
