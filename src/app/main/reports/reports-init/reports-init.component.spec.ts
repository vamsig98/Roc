import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsInitComponent } from './reports-init.component';

describe('ReportsInitComponent', () => {
  let component: ReportsInitComponent;
  let fixture: ComponentFixture<ReportsInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
