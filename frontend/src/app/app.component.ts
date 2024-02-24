import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EventIndexComponent} from "./event/index/index.component";
import {CommonModule} from "@angular/common";
import {WashIndexComponent} from "./wash/wash-index/wash-index.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventIndexComponent, WashIndexComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
