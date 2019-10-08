import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    public titulo = 'Alert Page';

    constructor(public alertController: AlertController) {
    }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Message <strong>text</strong>!!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentAlertMostrarInput() {
        const alert = await this.alertController.create({
            header: 'Input',
            subHeader: 'Ingrese su nombre',
            inputs: [
                {
                    name: 'nombre',
                    type: 'text',
                    placeholder: 'Nombre'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        console.log('cancel');
                    }
                },
                {
                    text: 'Ok',
                    handler: (data) => {
                        console.log(data);
                        this.titulo = data.nombre;
                    }
                }
            ]
        });

        await alert.present();
    }

}
