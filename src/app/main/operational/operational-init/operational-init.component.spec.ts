import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalInitComponent } from './operational-init.component';

describe('OperationalInitComponent', () => {
  let component: OperationalInitComponent;
  let fixture: ComponentFixture<OperationalInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
