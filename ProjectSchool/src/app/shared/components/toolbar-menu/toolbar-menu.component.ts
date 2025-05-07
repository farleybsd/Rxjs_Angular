import { MatIconModule } from '@angular/material/icon';
import { Component, Input, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../models/menuItem';
@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css'],
  imports: [RouterLink,MatToolbarModule,MatIconModule,MatMenuModule,MatDividerModule,CommonModule],
})
export class ToolbarMenuComponent implements OnInit {

  @Input() shadow = false;
  @Input() popText = false;
  @Input() menuTitle = '';
  @Input() items_menu: MenuItem[] = []
  constructor() { }

  ngOnInit() {
  }

}
