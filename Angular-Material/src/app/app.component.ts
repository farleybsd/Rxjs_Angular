import { Component,OnInit,ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout'
import { fromEvent, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { RouterOutlet, RouterLink } from '@angular/router';


export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT  = 50;
export const SHADOW_LIMIT = 100; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            MatSidenavModule,
            MatToolbarModule,
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            CommonModule,
            MatListModule,
            RouterOutlet,
            RouterLink,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
 public isSmallScreen :boolean = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public popText = false;
  public applyShadow = false;

 constructor(private breakpointObserverBreakpointObserver :BreakpointObserver) {}

 ngOnInit(): void {
  const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];
    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop),
    ).subscribe({
      next: (value: number) =>this.deternineHeader(value),
    })

 }

 deternineHeader(top : number)
{
  this.popText = top >= TEXT_LIMIT;
  this.applyShadow = top >= SHADOW_LIMIT;
}
 ngAfterContentInit(): void {
 this.breakpointObserverBreakpointObserver.observe(['(max-width: 800px)']).subscribe({
  next: (result) => {
    if (result.matches) {
      this.isSmallScreen = true;
      // If the screen is less than 800px wide, close the sidenav
     // this.sidenav.mode = 'over'; // Set the mode to 'over' for mobile view
     // this.sidenav.close();
    } else {
      this.isSmallScreen = false;
      // If the screen is wider than 800px, open the sidenav
      // this.sidenav.mode = 'side'; // Set the mode to 'push' for desktop view
      // this.sidenav.open();
    }
  } 
 });
}

get sidenavMode() {
  return this.isSmallScreen ? 'over' : 'side';
}


}
