import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchprofilePage } from './branchprofile.page';

describe('BranchprofilePage', () => {
  let component: BranchprofilePage;
  let fixture: ComponentFixture<BranchprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
