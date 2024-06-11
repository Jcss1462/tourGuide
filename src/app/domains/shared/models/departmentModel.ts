import { Cityes } from "./cityesModel"

export interface Department {
    id: number,
    name: string,
    description: string,
    cityCapitalId: number,
    municipalities: number,
    surface: number,
    population: number,
    phonePrefix: string,
    countryId: number,
    cities: Cityes,
    regionId: number,
}
