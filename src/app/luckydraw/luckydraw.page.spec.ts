import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckydrawPage } from './luckydraw.page';

describe('LuckydrawPage', () => {
  let component: LuckydrawPage;
  let fixture: ComponentFixture<LuckydrawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckydrawPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckydrawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
