import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Department } from '../../models/departmentModel';
import { CityesService } from '../../services/cityes.service';
import { Cityes } from '../../models/cityesModel';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  myForm: FormGroup;

  departments = signal<Department[]>([]);
  cities = signal<Cityes[]>([]);
  cityesService = inject(CityesService);


  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      departamento: ['', Validators.required],
      ciudad: ['', [Validators.required]],
      nombre: ['', []]
    });
  }


  ngOnInit(): void {  
    this.getDepartmentList();
  }
  


  getDepartmentList(){
    this.cityesService.getDepartmentList().subscribe(
      (response) => {
        this.departments.set(response);
        console.log(this.departments());
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  getCitieByDepartment(){
    this.cityesService.getCityesByDeparment(this.myForm.value["departamento"]).subscribe(
      (response) => {
        this.cities.set(response);
        console.log(this.departments());
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }else{
      alert("algunos de los camps obligatorios estan vacios");
    }
  }

}
