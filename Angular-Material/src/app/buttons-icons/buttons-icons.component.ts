import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-icons',
  templateUrl: './buttons-icons.component.html',
  styleUrls: ['./buttons-icons.component.scss'],
  standalone: true,
  imports: [CommonModule,MatIconModule,MatButtonModule]
})
export class ButtonsIconsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
