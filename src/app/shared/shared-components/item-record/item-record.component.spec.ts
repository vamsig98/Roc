import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecordComponent } from './item-record.component';

describe('ItemRecordComponent', () => {
  let component: ItemRecordComponent;
  let fixture: ComponentFixture<ItemRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
