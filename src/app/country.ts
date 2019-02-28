export interface Country {
  name: string;
  topLevelDomain?: (string)[] | null;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes?: (string)[] | null;
  capital: string;
  altSpellings?: (string)[] | null;
  region: string;
  subregion: string;
  population: number;
  latlng?: (number)[] | null;
  demonym: string;
  area: number;
  gini: number;
  timezones?: (string)[] | null;
  borders?: (string)[] | null;
  nativeName: string;
  numericCode: string;
  currencies?: (CurrenciesEntity)[] | null;
  languages?: (LanguagesEntity)[] | null;
  translations: Translations;
  flag: string;
  regionalBlocs?: (RegionalBlocsEntity)[] | null;
  cioc: string;
}
export interface CurrenciesEntity {
  code: string;
  name: string;
  symbol: string;
}
export interface LanguagesEntity {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}
export interface RegionalBlocsEntity {
  acronym: string;
  name: string;
  otherAcronyms?: (null)[] | null;
  otherNames?: (null)[] | null;
}
