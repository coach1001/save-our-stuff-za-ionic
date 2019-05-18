import { Component, OnInit } from '@angular/core';
import { SlipService } from '../../services/slip/slip.service';

@Component({
  selector: 'app-slip-list',
  templateUrl: './slip-list.page.html',
  styleUrls: ['./slip-list.page.scss'],
})
export class SlipListPage implements OnInit {
  public slipList: Array<any>;
  constructor(private slipService: SlipService) {}

  ngOnInit() {
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