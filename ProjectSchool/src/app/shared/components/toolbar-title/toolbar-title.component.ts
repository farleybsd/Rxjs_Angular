import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.css'],
  imports: [MatIconModule, MatToolbarModule],
})
export class ToolbarTitleComponent implements OnInit {
  @Input() title: string = "";
  @Input() icon: string = "";
  constructor() { }

  ngOnInit() {
  }

}
