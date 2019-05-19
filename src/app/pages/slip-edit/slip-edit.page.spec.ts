import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlipEditPage } from './slip-edit.page';

describe('SlipEditPage', () => {
  let component: SlipEditPage;
  let fixture: ComponentFixture<SlipEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlipEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlipEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
