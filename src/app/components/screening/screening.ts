import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-screening',
  imports: [RouterOutlet,Sidebar],
  templateUrl: './screening.html',
  styleUrl: './screening.scss',
})
export class Screening {

}
