import { Component } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retro-app';
  faEnvelope = faEnvelope;
  faLock = faLock;
  faMicrosoft = faMicrosoft;
  isCreate: boolean = false;

}