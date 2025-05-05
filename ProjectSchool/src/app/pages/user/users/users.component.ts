import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [ RouterOutlet,RouterLink],
  standalone: true
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
