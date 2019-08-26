import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwayConfigComponent } from './subway-config.component';

describe('SubwayConfigComponent', () => {
  let component: SubwayConfigComponent;
  let fixture: ComponentFixture<SubwayConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubwayConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwayConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
