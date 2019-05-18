import { Component, OnInit } from '@angular/core';
import { SlipService } from '../../services/slip/slip.service';
import { ActivatedRoute } from '@angular/router';

import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-slip-detail',
  templateUrl: './slip-detail.page.html',
  styleUrls: ['./slip-detail.page.scss'],
})
export class SlipDetailPage implements OnInit {
  public currentSlip: any = {};

  constructor(private eventService: SlipService, private route: ActivatedRoute) {}

  ngOnInit() {
    const slipId: string = this.route.snapshot.paramMap.get('id');
    this.eventService
      .getSlipDetail(slipId)
      .get()
      .then(eventSnapshot => {
        this.currentSlip = eventSnapshot.data();
        this.currentSlip.id = eventSnapshot.id;
      });
  }

  // async takePicture(): Promise<void> {
  //   try {
  //     const profilePicture = await Camera.getPhoto({
  //       quality: 90,
  //       allowEditing: false,
  //       resultType: CameraResultType.Base64,
  //     });
  //     this.guestPicture = profilePicture.base64Data.slice(23);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
