import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment, ToastController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {Componente} from '../../interfaces/componente';
import {DataService} from '../../services/data.service';
import {Superheroe} from '../../interfaces/superheroe';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    // @ts-ignore
    @ViewChild(IonSegment) segment: IonSegment;

    superheroes: Observable<Superheroe[]>;
    publisher = '';

    constructor(private dataService: DataService,
                private toastController: ToastController) {
    }

    ngOnInit() {
        this.segment.value = 'todos';
        this.getSuperheroes();
    }

    getSuperheroes() {
        this.superheroes = this.dataService.getSuperheroes();
    }

    segmentChanged(event) {
        console.log(event);
        const valorSegmento = event.detail.value;

        if (valorSegmento === 'todos') {
            this.publisher = '';
            return;
        }

        this.publisher = valorSegmento;
    }

    async onClick(mensaje: string) {
        const toast = await this.toastController.create({
            message: mensaje,
            duration: 3000
        });
        toast.present();
    }

}
