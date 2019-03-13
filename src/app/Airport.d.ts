export interface Airport {
  airportId: string;
  code: string;
  name: string;
  location: Location;
  cityId: string;
  city: string;
  countryCode: string;
  themes?: (string | null)[] | null;
  pointsOfSale?: (string)[] | null;
}
export interface Location {
  longitude: number;
  latitude: number;
}
