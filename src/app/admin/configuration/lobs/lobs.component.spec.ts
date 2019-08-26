import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobsComponent } from './lobs.component';

describe('LobsComponent', () => {
  let component: LobsComponent;
  let fixture: ComponentFixture<LobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
