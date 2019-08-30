import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecompPage } from './choosecomp.page';

describe('ChoosecompPage', () => {
  let component: ChoosecompPage;
  let fixture: ComponentFixture<ChoosecompPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosecompPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecompPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
