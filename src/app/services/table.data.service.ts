import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})
export class TableDataService {
    constructor() { }

    getStaticTableData10Items(): User[] {
        return [
            { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', countryCode: 'US' },
            { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com', countryCode: 'US' },
            { id: 3, name: 'Lukas Steiner', email: 'lukas.steiner@gmail.com', countryCode: 'AT' },
            { id: 4, name: 'Sofia Almeida', email: 'sofia.almeida@gmail.com', countryCode: 'PT' },
            { id: 5, name: 'Mateo Rossi', email: 'mateo.rossi@gmail.com', countryCode: 'IT' },
            { id: 6, name: 'Anna Nowak', email: 'anna.nowak@gmail.com', countryCode: 'PL' },
            { id: 7, name: 'Jonas Bergström', email: 'jonas.bergstrom@gmail.com', countryCode: 'SE' },
            { id: 8, name: 'Élodie Laurent', email: 'elodie.laurent@gmail.com', countryCode: 'FR' },
            { id: 9, name: 'Nikos Papadakis', email: 'nikos.papadakis@gmail.com', countryCode: 'GR' },
            { id: 10, name: 'Laura Kovács', email: 'laura.kovacs@gmail.com', countryCode: 'HU' }

        ];
    }

    getStaticTableData32Items(): User[] {
        return [
            { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', countryCode: 'US' },
            { id: 2, name: 'Jane Doe', email: 'jane.doe@gmail.com', countryCode: 'US' },
            { id: 3, name: 'Lukas Steiner', email: 'lukas.steiner@gmail.com', countryCode: 'AT' },
            { id: 4, name: 'Sofia Almeida', email: 'sofia.almeida@gmail.com', countryCode: 'PT' },
            { id: 5, name: 'Mateo Rossi', email: 'mateo.rossi@gmail.com', countryCode: 'IT' },
            { id: 6, name: 'Anna Nowak', email: 'anna.nowak@gmail.com', countryCode: 'PL' },
            { id: 7, name: 'Jonas Bergström', email: 'jonas.bergstrom@gmail.com', countryCode: 'SE' },
            { id: 8, name: 'Élodie Laurent', email: 'elodie.laurent@gmail.com', countryCode: 'FR' },
            { id: 9, name: 'Nikos Papadakis', email: 'nikos.papadakis@gmail.com', countryCode: 'GR' },
            { id: 10, name: 'Laura Kovács', email: 'laura.kovacs@gmail.com', countryCode: 'HU' },
            { id: 11, name: 'Marek Horváth', email: 'marek.horvath@gmail.com', countryCode: 'SK' },
            { id: 12, name: 'Eva Svendsen', email: 'eva.svendsen@gmail.com', countryCode: 'NO' },
            { id: 13, name: 'Marta López', email: 'marta.lopez@gmail.com', countryCode: 'ES' },
            { id: 14, name: 'Tomáš Novotný', email: 'tomas.novotny@gmail.com', countryCode: 'CZ' },
            { id: 15, name: 'Karl Müller', email: 'karl.mueller@gmail.com', countryCode: 'DE' },
            { id: 16, name: 'Alina Petrova', email: 'alina.petrova@gmail.com', countryCode: 'BG' },
            { id: 17, name: 'Henrik Andersen', email: 'henrik.andersen@gmail.com', countryCode: 'DK' },
            { id: 18, name: 'Jelena Marković', email: 'jelena.markovic@gmail.com', countryCode: 'RS' },
            { id: 19, name: 'Oliver Walsh', email: 'oliver.walsh@gmail.com', countryCode: 'IE' },
            { id: 20, name: 'Andrei Popescu', email: 'andrei.popescu@gmail.com', countryCode: 'RO' },
            { id: 21, name: 'Liene Ozoliņa', email: 'liene.ozolina@gmail.com', countryCode: 'LV' },
            { id: 22, name: 'Tiina Korhonen', email: 'tiina.korhonen@gmail.com', countryCode: 'FI' },
            { id: 23, name: 'Elias Demetriou', email: 'elias.demetriou@gmail.com', countryCode: 'CY' },
            { id: 24, name: 'Gregor Kranjc', email: 'gregor.kranjc@gmail.com', countryCode: 'SI' },
            { id: 25, name: 'Ewelina Kaminska', email: 'ewelina.kaminska@gmail.com', countryCode: 'PL' },
            { id: 26, name: 'Viktor Kovalenko', email: 'viktor.kovalenko@gmail.com', countryCode: 'UA' },
            { id: 27, name: 'Nadège Moreau', email: 'nadege.moreau@gmail.com', countryCode: 'FR' },
            { id: 28, name: 'Bence Tóth', email: 'bence.toth@gmail.com', countryCode: 'HU' },
            { id: 29, name: 'Stefan Ionescu', email: 'stefan.ionescu@gmail.com', countryCode: 'RO' },
            { id: 30, name: 'Sanne Visser', email: 'sanne.visser@gmail.com', countryCode: 'NL' },
            { id: 31, name: 'David Novak', email: 'david.novak@gmail.com', countryCode: 'HR' },
            { id: 32, name: 'Kristaps Bērziņš', email: 'kristaps.berzins@gmail.com', countryCode: 'LV' }

        ];
    }
}