import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInitComponent } from './error-init.component';

describe('AuthInitComponent', () => {
  let component: ErrorInitComponent;
  let fixture: ComponentFixture<ErrorInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
