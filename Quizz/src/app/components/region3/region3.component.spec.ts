import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Region3Component } from './region3.component';

describe('Region3Component', () => {
  let component: Region3Component;
  let fixture: ComponentFixture<Region3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Region3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Region3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
