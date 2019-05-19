import { Component, OnInit } from '@angular/core';
import { SlipService } from '../../services/slip/slip.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Plugins, CameraResultType } from '@capacitor/core';
import { SlipModel } from 'src/app/services/slip/slip.model';
import { Chooser } from '@ionic-native/chooser/ngx';
const { Camera } = Plugins;

@Component({
  selector: 'app-slip-edit',
  templateUrl: './slip-edit.page.html',
  styleUrls: ['./slip-edit.page.scss'],
})
export class SlipEditPage implements OnInit {
  currentSlip: SlipModel = {
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

ngOnInit() { 
    this.currentSlip = this.slipService.getCurrentSlip();
    if(!this.currentSlip) {
        this.router.navigateByUrl('/slip-list');
    }
}

openFilepicker() {
    this.chooser.getFile('*')
        .then(file => console.log(file ? file.name : 'canceled'))
        .catch((error: any) => console.error(error));
}

updateSlip(): void {
    console.log(this.currentSlip);
    this.slipService
        .updateSlip(this.currentSlip)
        .then(() => {
            this.router.navigateByUrl('/slip-list');
        });
}
  // async takePicture(): Promise<void> {
  //   try {
  //     const profilePicture = await Camera.getPhoto({
  //       quality: 90,s
  //       allowEditing: false,
  //       resultType: CameraResultType.Base64,
  //     });
  //     this.guestPicture = profilePicture.base64Data.slice(23);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
