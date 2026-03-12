import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Timezone } from '../../models/timezone';
import { Hour } from '../hour/hour';

@Component({
  selector: 'app-timezones-list',
  imports: [Hour],
  templateUrl: './timezones-list.html',
  styleUrl: './timezones-list.css',
})
export class TimezonesList {
  constructor(private readonly cd: ChangeDetectorRef) {}

  timezones: Timezone[] = [
    // { name: 'Paris', zoneId: 'Europe/Paris', currentTime: new Date() },
    // { name: 'New York', zoneId: 'America/New_York', currentTime: new Date() },
    // { name: 'Tokyo', zoneId: 'Asia/Tokyo', currentTime: new Date() },
    { name: 'Paris', zoneId: 'Europe/Paris' },
    { name: 'New York', zoneId: 'America/New_York' },
    { name: 'Tokyo', zoneId: 'Asia/Tokyo' },
  ];

  updateTimes(timezone : Timezone): string {
    // const now = new Date();
    let date : string = new Date().toLocaleString('fr-FR', { timeZone: timezone.zoneId });
    console.log(date);
    

    // this.timezones.forEach((tz) => {
    //   // tz.currentTime = new Date(now.toLocaleString('fr-FR', { timeZone: tz.zoneId }));
    //   time = new Date().toLocaleString('fr-FR', { timeZone: tz.zoneId });
    // });
    this.cd.detectChanges();
    // setInterval(() => this.updateTimes(), 1000);
    return "caca"
  }

//   ngOnInit(): void {
//     this.updateTimes();
//     setInterval(() => this.updateTimes(), 1000);
//   }
}
/* 
  getTimezoneTime(timezone: Timezone): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone.value });
    const time = date.split(' ')[1];

    setInterval (() => {
      this.getTimezoneTime(timezone);
      this.cd.markForCheck();
    }, 1000);

    return time;
  }
 */