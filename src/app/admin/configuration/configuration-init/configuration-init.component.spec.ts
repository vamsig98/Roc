import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationInitComponent } from './configuration-init.component';

describe('ConfigurationInitComponent', () => {
  let component: ConfigurationInitComponent;
  let fixture: ComponentFixture<ConfigurationInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
