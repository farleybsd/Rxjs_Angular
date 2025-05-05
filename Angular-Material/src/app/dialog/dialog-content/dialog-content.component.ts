import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Optional } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
  standalone: true,
  imports: [MatIconModule,MatDialogModule,MatButtonModule]
})
export class DialogContentComponent implements OnInit {

  constructor() { }
  readonly dialogRef = inject(MatDialogRef<DialogContentComponent>, { optional: true });
  data = inject(MAT_DIALOG_DATA);
  ngOnInit() {
  }
  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close('Farley Lindao Saiu!!!!');
    }
  }
}
