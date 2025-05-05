import { Component, inject, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarMensagemComponent } from '../snackbarMensagem/snackbarMensagem.component';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  imports: [MatSnackBarModule,MatIconModule]
})
export class SnackbarComponent implements OnInit {

  constructor() { }
  private snackbar = inject(MatSnackBar);
  durationInSeconds = 2;
  ngOnInit() {
    this.snackbar.open('Hello World', 'Fechar', {
      duration: this.durationInSeconds * 1000
    });
    
  }

  openSnackBar(){
    const snackBar =  this.snackbar.open('Hello World', 'Fechar', {
      duration: this.durationInSeconds * 1000
    });

    snackBar.afterDismissed().subscribe(_ => {
      console.log('The snackbar was dismissed');
    })

    snackBar.onAction().subscribe(_ => {
      console.log('After action was triggered');
    })
  }

  openFromComp(){
     this.snackbar.openFromComponent(SnackbarMensagemComponent, {
     data: 'Hello Turma',
     horizontalPosition: 'end',
     verticalPosition: 'top',
     duration:2500
    });

  
  }
}
