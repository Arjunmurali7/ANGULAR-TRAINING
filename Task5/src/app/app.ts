import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; //imports routeroutlet from routermodule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = ('home');
}
