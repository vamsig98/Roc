import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroughputReconComponent } from './throughput-recon.component';

describe('ThroughputReconComponent', () => {
  let component: ThroughputReconComponent;
  let fixture: ComponentFixture<ThroughputReconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThroughputReconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroughputReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
