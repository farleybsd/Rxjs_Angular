import { Component, effect, inject, OnInit, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Optional } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core'; // 👈 Importa isso
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css'],
  imports: [MatIconModule,MatButtonModule,CommonModule,MatDialogModule ],
  standalone: true,
})
export class DialogModalComponent {
  message = signal<string>('');
  private dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef); // 👈 injeta isso

  constructor() {
    // 👇 Força atualização do template toda vez que `message` mudar
    effect(() => {
      this.message();
      this.cdr.markForCheck();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      data: 'Farley Linsao',
      width: '750px',
      height: '200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message.set(result ?? '');
    });
  }
}