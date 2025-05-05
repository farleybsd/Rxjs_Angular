import { Component, Inject, OnInit } from '@angular/core';
import {MAT_SNACK_BAR_DATA,MatSnackBarRef} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-snackbarMensagem',
  templateUrl: './snackbarMensagem.component.html',
  styleUrls: ['./snackbarMensagem.component.css'],
  imports: [MatIconModule]
})
export class SnackbarMensagemComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data : string ,
              public matSnackBarRef: MatSnackBarRef<SnackbarMensagemComponent>) { }

  ngOnInit() {
  }

  public closeSnackbar() {
    this.matSnackBarRef.dismiss();
  }

}
