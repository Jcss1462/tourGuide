export interface TouristicAtraction{
    id: number,
    name: string,
    description: string,
    images: string[],
    latitude: string,
    longitude: string,
    cityId: number,
    city: string
}