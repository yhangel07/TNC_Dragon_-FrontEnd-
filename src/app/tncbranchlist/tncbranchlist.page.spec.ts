import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TncbranchlistPage } from './tncbranchlist.page';

describe('TncbranchlistPage', () => {
  let component: TncbranchlistPage;
  let fixture: ComponentFixture<TncbranchlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TncbranchlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TncbranchlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
