import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PopoverPage} from './popover.page';
import {PopinfoComponent} from '../../components/popinfo/popinfo.component';
import {ComponentsModule} from '../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: PopoverPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    declarations: [PopoverPage],
    entryComponents: [
        PopinfoComponent
    ]
})
export class PopoverPageModule {
}
