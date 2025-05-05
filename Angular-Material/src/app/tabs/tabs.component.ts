import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  imports: [MatTabsModule,MatIconModule]
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
