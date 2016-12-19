/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroMergeComponent } from './hero-merge.component';

describe('HeroMergeComponent', () => {
  let component: HeroMergeComponent;
  let fixture: ComponentFixture<HeroMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
