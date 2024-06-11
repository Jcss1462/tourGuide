import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TouristicAtraction } from '../models/touristicAtractionModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourGuideService {

  private http = inject(HttpClient);


  constructor() { }

  getAllTourGuide(): Observable<TouristicAtraction[]> {
    return this.http.get<TouristicAtraction[]>("https://api-colombia.com/api/v1/TouristicAttraction");
  }
  
}
