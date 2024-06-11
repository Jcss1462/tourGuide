import { TouristicAtraction} from "./touristicAtractionModel";

export interface Cityes
{
    id: number,
    name: string,
    description: string,
    surface: number,
    population: number,
    postalCode: string,
    departmentId: number,
    department: string,
    touristAttractions: TouristicAtraction
}
