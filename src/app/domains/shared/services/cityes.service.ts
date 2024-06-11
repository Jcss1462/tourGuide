import { Injectable, inject, signal } from '@angular/core';
import { TouristicAtraction } from '../models/touristicAtractionModel';
import { Department } from '../models/departmentModel';
import { Cityes } from '../models/cityesModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityesService {

  private http = inject(HttpClient);

  
  constructor() { }

  getDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>("https://api-colombia.com/api/v1/Department");
  }

  getCityesByDeparment(idDepartamento:number): Observable<Cityes[]> {
    return this.http.get<Cityes[]>("https://api-colombia.com/api/v1/Department/"+idDepartamento+"/cities");
  }

}
