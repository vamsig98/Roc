import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInitComponent } from './main-init.component';

describe('MainInitComponent', () => {
  let component: MainInitComponent;
  let fixture: ComponentFixture<MainInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
