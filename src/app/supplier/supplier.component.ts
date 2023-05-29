import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../suppliers.service';
import { Supplier } from '../supplier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplier: Supplier[] = [];
  isEditing: boolean = false;
  formGroupsupplier: FormGroup;
  submitted: boolean = false;

  constructor(private SuppliersService: SuppliersService, private formBuilder: FormBuilder) {
    this.formGroupsupplier = formBuilder.group({
    })
  }

}

ngOnInit(): void {
  this.loadSupplier();
}

loadSupplier() {
  this.SuppliersService.getSupplier().subscribe({
    next: data => this.supplier = data
  });
}

save() {
  this.submitted = true;

  if (this.formGroupsupplier.valid) {
    if (this.isEditing) {
      this.supplierService.update(this.formGroupsupplier.value).subscribe(
        {
          next: () => {
            this.loadsupplieres();
            this.formGroupsupplier.reset();
            this.isEditing = false;
            this.submitted = false;
          }
        }
      )
    }
    else {
      this.supplierService.save(this.formGroupsupplier.value).subscribe(
        {
          next: data => {
            this.supplieres.push(data);
            this.formGroupsupplier.reset();
            this.submitted = false;
          }
        }
      )
    }
  }
}

edit(supplier: supplier) {
  this.formGroupsupplier.setValue(supplier);
  this.isEditing = true;
}

delete (supplier: supplier) {
  this.supplierService.delete(supplier).subscribe({
    next: () => this.loadsupplieres()
  })
}
