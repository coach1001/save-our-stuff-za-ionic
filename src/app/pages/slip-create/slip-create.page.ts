import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlipService } from '../../services/slip/slip.service';
import { SlipModel } from 'src/app/services/slip/slip.model';
import { Chooser } from '@ionic-native/chooser/ngx';

@Component({
    selector: 'app-slip-create',
    templateUrl: './slip-create.page.html',
    styleUrls: ['./slip-create.page.scss'],
})
export class SlipCreatePage implements OnInit {

    slip: SlipModel = {
        itemDescription: '',
        purchaseDate: '',
        category: [],
        store: '',
        purchaseLocation: '',
        selectWarrantee: '',
        approximateValue: null,
        taxClaimable: null,
        pictures: [],
        notes: ''
    }

    constructor(
        private chooser: Chooser,
        private router: Router, 
        private slipService: SlipService) { }

    ngOnInit() { }

    openFilepicker() {
        this.chooser.getFile('*')
            .then(file => console.log(file ? file.name : 'canceled'))
            .catch((error: any) => console.error(error));
    }

    createSlip(
        slip: SlipModel
    ): void {
        this.slipService
            .createSlip(slip)
            .then(() => {
                this.router.navigateByUrl('');
            });
    }
}
