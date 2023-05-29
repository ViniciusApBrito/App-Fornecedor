import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';


@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) { }

  getSupplier(): Observable<Supplier[]>{
    let url = "http://localhost:3002/supplier";
    return this.http.get<Supplier[]>(url);
  }
}
