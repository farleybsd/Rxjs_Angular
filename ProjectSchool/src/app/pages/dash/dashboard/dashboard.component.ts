import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { ToolbarTitleComponent } from '../../../shared/components/toolbar-title/toolbar-title.component';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, RouterOutlet, MatTabsModule,
    MatIconModule,ToolbarTitleComponent,MatButtonModule,FlexLayoutModule]
})
export class DashboardComponent implements OnInit {

  selectedIndex = 1;

  constructor() {}

  ngOnInit(): void {
   
  }
  
}
