import { Component, signal } from '@angular/core';

import { Welcome } from './welcome/welcome'; // imports wlcome frome local
@Component({ //decorater ties together all
  selector: 'app-root', //This component will be used in HTML as <app-root>
  imports: [Welcome], //Indicates that the Welcome component is used inside this component
  templateUrl: './app.html', //Points to the HTML file that defines the component’s view.
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('welcomeapp');//Signals are used to track state changes and automatically update the view when the value changes.
}
