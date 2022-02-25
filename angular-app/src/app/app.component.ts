import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() phoneNumber = '';
  @Input() email = '';
  inputValue = '';

  changeWebsite(event: any) {
    this.inputValue = event.target.value;
    document.dispatchEvent(
      new CustomEvent('angular-input-event', { detail: event.target.value })
    );
  }
}
