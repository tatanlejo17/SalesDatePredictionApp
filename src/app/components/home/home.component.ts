import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Customer } from '../../interfaces/customer.interface';

const listCustomer: Customer[] = [
  {custid: 1, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 2, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 3, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 4, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 5, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())},
  {custid: 6, companyName: 'Hydrogen', lastOrderDate: new Date(Date.now()), nextPredictedOrder: new Date(Date.now())}
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatToolbarModule, MatTableModule, MatFormFieldModule, MatPaginatorModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit  {

  displayedColumns: string[] = ['companyName', 'lastOrderDate', 'nextPredictedOrder'];
  dataSource = new MatTableDataSource<Customer>(listCustomer);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
