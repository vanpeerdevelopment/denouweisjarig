import {Injectable} from '@angular/core';
import {Fietstocht} from './fietsttocht';

const rondZaventem: Fietstocht = {
    id: 'rond-zaventem',
    icoon: 'flight_takeoff',
    titel: 'Rond Zaventem',
    ondertitel: 'Vliegertjes spotten maar',
    afbeeldingUrl: 'assets/fietstocht/zemst.png',
    korteBeschrijving: 'Deze tocht vetrekt bij Dieter en rijdt via de fietsostrade naar de luchthaven van Zaventem. Van daaruit wordt de trip verder gezet richting Mechelen om vervolgens langs de Vaart terug koers te zetten naar Leuven.',
};

const opnieuwRondZaventem: Fietstocht = {
    id: 'opnieuw-rond-zaventem',
    icoon: 'flight_land',
    titel: 'Opnieuw rond Zaventem',
    ondertitel: 'Weer vliegertjes spotten maar',
    afbeeldingUrl: 'assets/fietstocht/zemst.png',
    korteBeschrijving: 'Deze tocht vetrekt bij Dieter en rijdt via de fietsostrade naar de luchthaven van Zaventem. Van daaruit wordt de trip verder gezet richting Mechelen om vervolgens langs de Vaart terug koers te zetten naar Leuven.',
};

const fietsttochten: Fietstocht[] = [
    rondZaventem,
    opnieuwRondZaventem,
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