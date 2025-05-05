import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { concat, interval, map } from 'rxjs';
import { take, takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
  imports: [MatProgressBarModule,MatProgressSpinnerModule],
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercentage: number = 50;
  public queryMode: ProgressBarMode = 'query';
  public queryValue: number = 0;
  public currentPlayback: number = 0;
  constructor() { }

  ngOnInit() {
    this.loadingProgress(500,100).subscribe( i => this.loadingPercentage = i);

    this.loadingProgress(350,100).subscribe( i => this.currentPlayback = i);

    concat(
      interval(2000).pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate')),
      ),
      this.loadingProgress(500,100)
    ).subscribe( i => this.queryValue = i) 
  }

  loadingProgress(speed:number,takeUntil:number) {
    return interval(speed).pipe(
      map( i => i * 5),
      takeWhile( i => i <= takeUntil)
    )
  }
}
