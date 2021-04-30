import {Injectable} from '@angular/core';
import {Fietstocht} from './fietsttocht';

const mechelen: Fietstocht = {
    id: 'mechelen',
    icoon: 'directions_boat',
    titel: 'Mechelen',
    ondertitel: 'Langs het water bollen',
    afstand: '69',
    hoogtewinst: '158',
    afbeeldingUrl: 'assets/fietstocht/mechelen/mechelen.png',
    gpxUrl: 'assets/fietstocht/mechelen/mechelen.gpx',
    korteBeschrijving: 'Van Vlaamse velden tot torenhoge Mechelse (over)moed… Hopelijk valt er niets of niemand in het water.',
    beschrijving: 'Nadat de heerlijke geur van vers gebrouwen bier de zintuigen wat scherper heeft gesteld, leidt deze route je langs Vlaamse velden naar de trots van de Maneblussers. In de schaduw van de toren zijn er alleszins bijtankmogelijkheden à volonté; zeker tijdens de zaterdagmarkt (tot 13u). Met wat geluk vallen er op de terugweg langs de Vaart ook nog enkele reigers te spotten of, wie weet, zelfs een wandelende Soetkin.',
    pois: [
        {
            icoon: 'sports_bar',
            km: '3,5',
            label: 'Stella',
        },
        {
            icoon: 'terrain',
            km: '10',
            label: 'Sigarenberg',
        },
        {
            icoon: 'deck',
            km: '19,5',
            label: 'Groene Vallei',
        },
        {
            icoon: 'park',
            km: '32',
            label: 'Park van Hofstade',
        },
        {
            icoon: 'location_city',
            km: '38',
            label: 'Grote Markt Mechelen',
        },
        {
            icoon: 'local_cafe',
            km: '48',
            label: 'De Wilg',
        }
    ]
};

const overijse: Fietstocht = {
    id: 'overijse',
    icoon: 'terrain',
    titel: 'Overijse',
    ondertitel: 'Klimmen geblazen',
    afstand: '68',
    hoogtewinst: '660',
    afbeeldingUrl: 'assets/fietstocht/overijse/overijse.png',
    gpxUrl: 'assets/fietstocht/overijse/overijse.gpx',
    korteBeschrijving: 'De heuveltjes van Erika… euh, Overijse. En uiteraard op tijd en stond een hapje en tapje.',
    beschrijving: 'Deze tocht begint met een opwarmertje van formaat. Gelukkig kan je enkele kilometers later het zoete water al in de mond krijgen, want aan horecavoorzieningen geen gebrek. Echter, aan hellingen ook niet! Na het aanschouwen van Dieters vroegere thuislocaties is wat extra aansterken in de Leuvense binnenstad dan ook ten zeerste aangeraden. Vandaag is de dag waar je met enige fierheid (en wat stijve spieren) op terug zal kunnen blikken!',
    pois: [
        {
            icoon: 'terrain',
            km: '1',
            label: 'Heidebergstraat',
        },
        {
            icoon: 'restaurant',
            km: '15',
            label: 'Zoet Water',
        },
        {
            icoon: 'terrain',
            km: '24',
            label: 'Smeysberg',
        },
        {
            icoon: 'terrain',
            km: '31',
            label: 'Lanestraat',
        },
        {
            icoon: 'location_city',
            km: '34',
            label: 'S-Bocht',
        },
        {
            icoon: 'home',
            km: '40',
            label: 'Duisburg',
        },
        {
            icoon: 'school',
            km: '51,5',
            label: 'Campus Arenberg',
        },
        {
            icoon: 'home',
            km: '54',
            label: 'Studio Naamsepoort',
        },
        {
            icoon: 'location_city',
            km: '55',
            label: 'Leuven',
        },
        {
            icoon: 'terrain',
            km: '60',
            label: 'Meesbergpad',
        },
        {
            icoon: 'terrain',
            km: '62,5',
            label: 'Chartreuzenberg',
        }
    ]
};

const aarschot: Fietstocht = {
    id: 'aarschot',
    icoon: 'brunch_dining',
    titel: 'Aarschot',
    ondertitel: 'Op naar een mooie beloning',
    afstand: '67',
    hoogtewinst: '254',
    afbeeldingUrl: 'assets/fietstocht/aarschot/aarschot.png',
    gpxUrl: 'assets/fietstocht/aarschot/aarschot.gpx',
    korteBeschrijving: 'Er was eens… een sprookjesachtige rit met marginale tussenstop en koninklijke ontvangst. Genieten maar!',
    beschrijving: 'Vandaag is de dag om de ridder(lijke jonkvrouw) in jezelf naar boven te halen. Voel je maar snel een echte vorst in het Kasteel van Horst, want voor je het weet zal je terecht komen in het hoekpunt der marginaliteit… Gelukkig wacht er aan het einde van de rit een koninklijke ontvangst onder Dieters groene dak. Honger hebben wordt ten zeerste aangeraden (want aan ’s avonds eten als een bedelaar wordt niet meegedaan)!',
    pois: [
        {
            icoon: 'local_cafe',
            km: '10',
            label: 'Kasteel van Horst',
        },
        {
            icoon: 'terrain',
            km: '14',
            label: 'Houwaartsebergweg',
        },
        {
            icoon: 'terrain',
            km: '18',
            label: 'Panoramastraat',
        },
        {
            icoon: 'location_city',
            km: '24',
            label: 'Hoekpunt der marginaliteit',
        },
        {
            icoon: 'festival',
            km: '36',
            label: 'Werchter',
        },
        {
            icoon: 'brunch_dining',
            km: '58',
            label: 'Dieter',
        }
    ],
};

const fietsttochten: Fietstocht[] = [
    mechelen,
    overijse,
    aarschot,
];

@Injectable({
    providedIn: 'root'
})
export class FietstochtService {

    getFietsttochten(): Fietstocht[] {
        return fietsttochten;
    }

    getFietstocht(id: string): Fietstocht | undefined {
        return fietsttochten.find(fietstocht => fietstocht.id === id);
    }
}