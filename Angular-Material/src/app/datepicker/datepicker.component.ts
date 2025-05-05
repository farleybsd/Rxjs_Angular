import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatNativeDateModule } from '@angular/material/core';
import {Platform} from '@angular/cdk/platform'
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import moment from 'moment'; // ✔️ certo (importação default)

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [provideNativeDateAdapter(),
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-br',
  }],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule,MatMomentDateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent implements OnInit {

  public startDate = moment([2022,9,28]); 
  public mintDate = moment([2022,8,28]);
  public maxDate = moment([2022, 11,28]);
  constructor(private plataform : Platform) { }

  ngOnInit() {
  }

  get isTouchDevice() {
    return this.plataform.ANDROID || this.plataform.IOS;
  }
}
