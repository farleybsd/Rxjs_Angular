import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-formFild-Input',
  templateUrl: './formFild-Input.component.html',
  styleUrls: ['./formFild-Input.component.css'],
  imports: [FormsModule, MatFormFieldModule, MatInputModule,MatIconModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline',floatLabel: 'always'}},
  ]
})
export class FormFildInputComponent implements OnInit {
  value = '';
  postalCodeValue = '94043';

  constructor() { }

  ngOnInit() {
  }
  
}
