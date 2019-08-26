import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthInitComponent } from './auth-init.component';

describe('AuthInitComponent', () => {
  let component: AuthInitComponent;
  let fixture: ComponentFixture<AuthInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
