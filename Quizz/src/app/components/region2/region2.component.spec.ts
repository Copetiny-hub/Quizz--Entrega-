import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Region2Component } from './region2.component';

describe('Region2Component', () => {
  let component: Region2Component;
  let fixture: ComponentFixture<Region2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Region2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Region2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
