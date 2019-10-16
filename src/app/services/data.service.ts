import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/componente';
import {Superheroe} from '../interfaces/superheroe';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    getMenuOptions() {
        return this.httpClient.get<Componente[]>('/assets/data/menu.json');
    }

    getSuperheroes() {
        return this.httpClient.get<Superheroe[]>('/assets/data/superheroes.json');
    }
}
