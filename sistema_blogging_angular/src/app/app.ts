import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blog } from './components/blog/blog';


@Component({
  selector: 'app-root',
  imports: [Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'sistema_blogging_angular';
}
