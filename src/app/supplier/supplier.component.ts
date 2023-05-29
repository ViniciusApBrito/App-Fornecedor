import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier: Supplier[] = [];

  constructor(private SuppliersService: SuppliersService) { }

  ngOnInit(): void {
    this.loadSupplier();

  }

  loadSupplier() {
    this.SuppliersService.getSupplier().subscribe({
      next: data => this.supplier = data
    });
  }

}
