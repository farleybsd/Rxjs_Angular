import { AfterViewInit, Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0] as HTMLElement;

    if (content) {
      fromEvent(content, 'scroll')
        .pipe(map(() => content.scrollTop))
        .subscribe((value: number) => this.determineHeader(value));
    }

    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScreen = res.matches);
  }

  determineHeader(scrollTop: number) {
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
