export interface Fietstocht {
    id: string;
    icoon: string;
    titel: string;
    ondertitel: string;
    afstand: string;
    hoogtewinst: string;
    afbeeldingUrl: string;
    gpxUrl: string;
    korteBeschrijving: string;
    beschrijving: string;
    pois: PointOfInterest[];
}

export interface PointOfInterest {
    icoon: string;
    km: string;
    label: string;
}