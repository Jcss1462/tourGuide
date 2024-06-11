import { Component, inject, signal } from '@angular/core';
import { TouristicAtraction } from '../../shared/models/touristicAtractionModel';
import { TourGuideService } from '../../shared/services/tour-guide.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  touristicAtraction = signal<TouristicAtraction[]>([]);
  tourGuideService = inject(TourGuideService);

  ngOnInit(): void {
   this.getAllTouristicAtraction();
  }

  getAllTouristicAtraction(){
    this.tourGuideService.getAllTourGuide().subscribe(
      (response) => {
        this.touristicAtraction.set(response);
        console.log(this.touristicAtraction());
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

}
