import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { ToolbarTitleComponent } from '../../../shared/components/toolbar-title/toolbar-title.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
   imports: [CommonModule, RouterOutlet, MatTabsModule,
      MatIconModule,ToolbarTitleComponent,MatButtonModule]
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
