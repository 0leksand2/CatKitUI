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
            { id: 32, name: 'Kristaps Bērziņš', email: 'kristaps.berzins@gmail.com', countryCode: 'LV' },
            { id: 33, name: 'Daniel Lund', email: 'daniel.lund@gmail.com', countryCode: 'SE' },
            { id: 34, name: 'Katrin Vogel', email: 'katrin.vogel@gmail.com', countryCode: 'DE' },
            { id: 35, name: 'Rita Jakobsdóttir', email: 'rita.jakobsdottir@gmail.com', countryCode: 'IS' },
            { id: 36, name: 'Erik Johansen', email: 'erik.johansen@gmail.com', countryCode: 'NO' },
            { id: 37, name: 'Paolo Conti', email: 'paolo.conti@gmail.com', countryCode: 'IT' },
            { id: 38, name: 'Marija Kovačević', email: 'marija.kovacevic@gmail.com', countryCode: 'RS' },
            { id: 39, name: 'João Pereira', email: 'joao.pereira@gmail.com', countryCode: 'PT' },
            { id: 40, name: 'Helena Zemanová', email: 'helena.zemanova@gmail.com', countryCode: 'CZ' },
            { id: 41, name: 'Milan Jurić', email: 'milan.juric@gmail.com', countryCode: 'HR' },
            { id: 42, name: 'Agnese Vītola', email: 'agnese.vitola@gmail.com', countryCode: 'LV' },
            { id: 43, name: 'Petra Novak', email: 'petra.novak@gmail.com', countryCode: 'SI' },
            { id: 44, name: 'Anders Mikkelsen', email: 'anders.mikkelsen@gmail.com', countryCode: 'DK' },
            { id: 45, name: 'Eleni Karagianni', email: 'eleni.karagianni@gmail.com', countryCode: 'GR' },
            { id: 46, name: 'Bruno Moretti', email: 'bruno.moretti@gmail.com', countryCode: 'IT' },
            { id: 47, name: 'Roxana Dumitrescu', email: 'roxana.dumitrescu@gmail.com', countryCode: 'RO' },
            { id: 48, name: 'Timo Laaksonen', email: 'timo.laaksonen@gmail.com', countryCode: 'FI' },
            { id: 49, name: 'Samuel Nilsson', email: 'samuel.nilsson@gmail.com', countryCode: 'SE' },
            { id: 50, name: 'Bogdan Melnyk', email: 'bogdan.melnyk@gmail.com', countryCode: 'UA' },
            { id: 51, name: 'Katarzyna Lewandowska', email: 'katarzyna.lewandowska@gmail.com', countryCode: 'PL' },
            { id: 52, name: 'Marek Vacek', email: 'marek.vacek@gmail.com', countryCode: 'CZ' },
            { id: 53, name: 'Patrick O’Connor', email: 'patrick.oconnor@gmail.com', countryCode: 'IE' },
            { id: 54, name: 'Zoé Lefèvre', email: 'zoe.lefevre@gmail.com', countryCode: 'FR' },
            { id: 55, name: 'Inga Rannama', email: 'inga.rannama@gmail.com', countryCode: 'EE' },
            { id: 56, name: 'David Fischer', email: 'david.fischer@gmail.com', countryCode: 'DE' },
            { id: 57, name: 'Frida Sørensen', email: 'frida.sorensen@gmail.com', countryCode: 'DK' },
            { id: 58, name: 'Antoine Bernard', email: 'antoine.bernard@gmail.com', countryCode: 'FR' },
            { id: 60, name: 'Anže Zupan', email: 'anze.zupan@gmail.com', countryCode: 'SI' },
            { id: 61, name: 'Albina Kelmendi', email: 'albina.kelmendi@gmail.com', countryCode: 'AL' },
            { id: 62, name: 'Nikola Petrović', email: 'nikola.petrovic@gmail.com', countryCode: 'RS' },
            { id: 63, name: 'Kristin Hauge', email: 'kristin.hauge@gmail.com', countryCode: 'NO' },
            { id: 64, name: 'Oskar Berg', email: 'oskar.berg@gmail.com', countryCode: 'SE' },
            { id: 65, name: 'Bastian Weber', email: 'bastian.weber@gmail.com', countryCode: 'DE' },
            { id: 66, name: 'Carla Duarte', email: 'carla.duarte@gmail.com', countryCode: 'PT' },
            { id: 67, name: 'Ieva Jansone', email: 'ieva.jansone@gmail.com', countryCode: 'LV' },
            { id: 68, name: 'Piotr Zieliński', email: 'piotr.zielinski@gmail.com', countryCode: 'PL' },
            { id: 69, name: 'Vojtěch Král', email: 'vojtech.kral@gmail.com', countryCode: 'CZ' },
            { id: 70, name: 'Lea Horvat', email: 'lea.horvat@gmail.com', countryCode: 'HR' },
            { id: 71, name: 'Sven Olsson', email: 'sven.olsson@gmail.com', countryCode: 'SE' },
            { id: 72, name: 'Marina Popova', email: 'marina.popova@gmail.com', countryCode: 'UA' },
            { id: 73, name: 'Jürgen Haas', email: 'jurgen.haas@gmail.com', countryCode: 'DE' },
            { id: 74, name: 'Clara Dupont', email: 'clara.dupont@gmail.com', countryCode: 'FR' },
            { id: 75, name: 'Teodora Iancu', email: 'teodora.iancu@gmail.com', countryCode: 'RO' },
            { id: 76, name: 'Arthur Jensen', email: 'arthur.jensen@gmail.com', countryCode: 'DK' },
            { id: 77, name: 'Eliza Staroń', email: 'eliza.staron@gmail.com', countryCode: 'PL' },
            { id: 78, name: 'Blaž Koren', email: 'blaz.koren@gmail.com', countryCode: 'SI' },
            { id: 79, name: 'Jonas Silva', email: 'jonas.silva@gmail.com', countryCode: 'PT' },
            { id: 80, name: 'Dragana Vuković', email: 'dragana.vukovic@gmail.com', countryCode: 'RS' },
            { id: 81, name: 'Arnaud Girard', email: 'arnaud.girard@gmail.com', countryCode: 'FR' },
            { id: 82, name: 'Hanna Pesonen', email: 'hanna.pesonen@gmail.com', countryCode: 'FI' },
            { id: 83, name: 'Emil Sørensen', email: 'emil.sorensen@gmail.com', countryCode: 'DK' },
            { id: 84, name: 'Leonardo Romano', email: 'leonardo.romano@gmail.com', countryCode: 'IT' },
            { id: 85, name: 'Ilze Bērziņa', email: 'ilze.berzina@gmail.com', countryCode: 'LV' },
            { id: 86, name: 'Vladimir Novak', email: 'vladimir.novak@gmail.com', countryCode: 'CZ' },
            { id: 87, name: 'Nina Kos', email: 'nina.kos@gmail.com', countryCode: 'SI' },
            { id: 88, name: 'Marius Pop', email: 'marius.pop@gmail.com', countryCode: 'RO' },
            { id: 89, name: 'Giulia Bianchi', email: 'giulia.bianchi@gmail.com', countryCode: 'IT' },
            { id: 90, name: 'Andreas Berg', email: 'andreas.berg@gmail.com', countryCode: 'NO' },
            { id: 91, name: 'Sofia Eriksson', email: 'sofia.eriksson@gmail.com', countryCode: 'SE' },
            { id: 92, name: 'Marek Kalinowski', email: 'marek.kalinowski@gmail.com', countryCode: 'PL' },
            { id: 93, name: 'Hugo Moreira', email: 'hugo.moreira@gmail.com', countryCode: 'PT' },
            { id: 94, name: 'Tanja Petrović', email: 'tanja.petrovic@gmail.com', countryCode: 'RS' },
            { id: 95, name: 'Eva Müller', email: 'eva.mueller@gmail.com', countryCode: 'DE' },
            { id: 96, name: 'Bert van Dijk', email: 'bert.vandijk@gmail.com', countryCode: 'NL' },
            { id: 97, name: 'Anna Papadopoulou', email: 'anna.papadopoulou@gmail.com', countryCode: 'GR' },
            { id: 98, name: 'Kristjan Tamm', email: 'kristjan.tamm@gmail.com', countryCode: 'EE' },
            { id: 99, name: 'Lara Kovacic', email: 'lara.kovacic@gmail.com', countryCode: 'HR' },
            { id: 101, name: 'Marta Kowalska', email: 'marta.kowalska@gmail.com', countryCode: 'PL' },
            { id: 102, name: 'Oleksiy Havrylenko', email: 'oleksiy.havrylenko@gmail.com', countryCode: 'UA' }

        ];
    }

    remoteLoadingTableData(page: number, pageSize: number): Promise<{ data: User[], totalCount: number }> {
        return new Promise((resolve) => {
            const allData = this.getStaticTableData32Items();
            const startIndex = (page - 1) * pageSize;
            const pagedData = allData.slice(startIndex, startIndex + pageSize);
            setTimeout(() => {
                resolve({ data: pagedData, totalCount: allData.length });
            }, 200); // Simulate network delay
        });
    }
}