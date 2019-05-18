import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlipService } from '../../services/slip/slip.service';
import { SlipModel } from 'src/app/services/slip/slip.model';

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

    constructor(private router: Router, private slipService: SlipService) { }

    ngOnInit() { }

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
