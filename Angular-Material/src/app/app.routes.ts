import { Routes } from '@angular/router';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFildInputComponent } from './formFild-Input/formFild-Input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';
import { DatatableComponent } from './datatable/datatable.component';

export const routes: Routes = [
    {path:'buton',component:ButtonsIconsComponent},
    {path:'form',component:FormFildInputComponent},
    {path:'progress',component:ProgressSpinnerComponent},
    {path:'tab',component:TabsComponent}, 
    {path:'date',component:DatepickerComponent}, 
    {path:'snack',component:SnackbarComponent}, 
    {path:'dialog',component:DialogModalComponent},
    {path:'data',component:DatatableComponent},
];
