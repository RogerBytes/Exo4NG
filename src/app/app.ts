import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TimezonesList } from './components/timezones-list/timezones-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimezonesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Exo4NG');
}
