import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
    styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

    data = Array(20);

    constructor() {
    }

    ngOnInit() {
    }

    loadData(event) {
        console.log(`load`);

        if (this.data.length > 50) {
            event.target.complete();
            return;
        }

        // simular carga asincrona de datos
        setTimeout(() => {
            const nvoArr = Array(20);
            this.data.push(...nvoArr);
            event.target.complete();
        }, 1000);
    }

}
