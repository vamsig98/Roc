import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSendemailComponent } from './page-sendemail.component';

describe('PageSendemailComponent', () => {
  let component: PageSendemailComponent;
  let fixture: ComponentFixture<PageSendemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSendemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSendemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
