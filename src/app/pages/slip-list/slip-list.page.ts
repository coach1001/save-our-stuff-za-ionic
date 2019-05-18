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
            name: snap.data().name,
            price: snap.data().price,
            date: snap.data().date,
          });
          return false;
        });
      });
  }
}
