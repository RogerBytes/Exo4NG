import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hour } from './hour';

describe('Hour', () => {
  let component: Hour;
  let fixture: ComponentFixture<Hour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hour],
    }).compileComponents();

    fixture = TestBed.createComponent(Hour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
