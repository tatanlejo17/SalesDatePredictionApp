import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from '../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class NewOrderModalService {
  private readonly _dialog = inject(MatDialog);

  constructor() { }

  openModalNewOrder<CT, T = Customer>(componentRef: ComponentType<CT>, data?: T, isEditing = false, title?: string ): void {
    const config = { data, isEditing, title };

    this._dialog.open(componentRef, {
      data: config,
      height: '600px',
      width: '90%'
    });
  }

  closeModalNewOrder(): void {
    this._dialog.closeAll();
  }
}
