import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesInitComponent } from './processes-init.component';

describe('ProcessesInitComponent', () => {
  let component: ProcessesInitComponent;
  let fixture: ComponentFixture<ProcessesInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessesInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
