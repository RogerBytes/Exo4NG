import { Component, input } from '@angular/core';
import { Timezone } from '../../models/timezone';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hour',
  imports: [DatePipe],
  templateUrl: './hour.html',
  styleUrl: './hour.css',
})
export class Hour {
  timezone = input<Timezone>({} as Timezone)
}
