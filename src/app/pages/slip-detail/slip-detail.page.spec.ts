import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipDetailPage } from './slip-detail.page';

describe('EventDetailPage', () => {
  let component: SlipDetailPage;
  let fixture: ComponentFixture<SlipDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
