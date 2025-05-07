import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { ToolbarTitleComponent } from '../../../shared/components/toolbar-title/toolbar-title.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  imports: [CommonModule, RouterOutlet, MatTabsModule,
    MatIconModule,ToolbarTitleComponent,MatButtonModule]
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
