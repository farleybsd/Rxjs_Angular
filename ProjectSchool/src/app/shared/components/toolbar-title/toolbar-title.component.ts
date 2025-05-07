import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.css'],
  imports: [CommonModule, MatIconModule, MatToolbarModule],
})
export class ToolbarTitleComponent implements OnInit {
  @Input() title: string = "";
  iconFa = '';
  iconMat = '';
  fontset = '';

  @Input()
  set icon(value: string) {
    if (value.includes('fa-')) {
      this.iconFa = `icon-space-mat ${value}`;
      this.fontset = 'fa';
    } else {
      this.iconMat = value;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
