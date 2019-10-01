import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymenuComponent } from './companymenu.component';

describe('CompanymenuComponent', () => {
  let component: CompanymenuComponent;
  let fixture: ComponentFixture<CompanymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymenuComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
