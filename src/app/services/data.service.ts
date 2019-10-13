import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/componente';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    getMenuOptions() {
        return this.httpClient.get<Componente[]>('/assets/data/menu.json');
    }
}
