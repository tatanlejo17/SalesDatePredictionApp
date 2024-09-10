import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Customer } from '../../interfaces/customer.interface';
import { NewOrderModalService } from '../../services/new-order-modal.service';
import { NewOrderModalComponent } from '../new-order-modal/new-order-modal.component';

const listCustomer: Customer[] = [
  {custid: 1, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 2, companyName: 'Helio', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 3, companyName: 'Oxygen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 4, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 5, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 6, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())}
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit  {

  private readonly _newOrderModalService = inject(NewOrderModalService)

  companyName: string = 'Prueba';

  constructor(){

  }

  displayedColumns: string[] = ['companyName', 'lastOrderDate', 'nextPredictedOrder', 'viewOrders', 'newOrders'];
  dataSource = new MatTableDataSource<Customer>(listCustomer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openNewOrder() {
    this._newOrderModalService.openModalNewOrder<NewOrderModalComponent, Customer>(NewOrderModalComponent)
  }
}
