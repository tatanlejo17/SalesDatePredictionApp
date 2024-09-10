import { Component, Inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-new-order-modal',
  standalone: true,
  imports: [ MatInputModule, MatGridListModule, MatSelectModule, MatDialogModule ],
  templateUrl: './new-order-modal.component.html',
  styleUrl: './new-order-modal.component.css'
})
export class NewOrderModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
