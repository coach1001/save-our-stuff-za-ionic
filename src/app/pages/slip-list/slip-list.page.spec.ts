import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipListPage } from './slip-list.page';

describe('EventListPage', () => {
  let component: SlipListPage;
  let fixture: ComponentFixture<SlipListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
