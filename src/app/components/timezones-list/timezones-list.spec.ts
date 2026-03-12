import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezonesList } from './timezones-list';

describe('TimezonesList', () => {
  let component: TimezonesList;
  let fixture: ComponentFixture<TimezonesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimezonesList],
    }).compileComponents();

    fixture = TestBed.createComponent(TimezonesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
