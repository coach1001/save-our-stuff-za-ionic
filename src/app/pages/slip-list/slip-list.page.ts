import { Component, OnInit } from '@angular/core';
import { SlipService } from '../../services/slip/slip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slip-list',
  templateUrl: './slip-list.page.html',
  styleUrls: ['./slip-list.page.scss'],
})
export class SlipListPage implements OnInit {
  public slipList: Array<any>;
  constructor(private slipService: SlipService, private router: Router) {}

    ngOnInit() {
        this.slipService.clearCurrentSlip();
        this.slipService
            .getSlipList()
            .get()
            .then(slipListSnapshot => {
                this.slipList = [];
                slipListSnapshot.forEach(snap => {
                    this.slipList.push({
                        id: snap.id,
                        ...snap.data()
                    });
            return false;
        });
      });
    }

    setCurrentSlip(slipId: string) {
        const currentSlip = this.slipList.find(slip => slip.id === slipId);
        if(currentSlip) {
            this.slipService.setCurrentSlip(currentSlip);
            this.router.navigateByUrl(`/slip-edit/${currentSlip.id}`);
        }

    }
}


// export interface SlipModel {
//   id?: string,
//   itemDescription: string,
//   purchaseDate: string,
//   category: Array<string>,
//   store: string,
//   purchaseLocation: string,
//   selectWarrantee: string,
//   approximateValue: number,
//   taxClaimable: boolean,
//   pictures: Array<string>,
//   notes: string
// }