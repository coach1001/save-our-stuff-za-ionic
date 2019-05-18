import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { SlipModel } from './slip.model';

@Injectable({
  providedIn: 'root',
})
export class SlipService {
  public slipListRef: firebase.firestore.CollectionReference;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.slipListRef = firebase
          .firestore()
          .collection(`/userProfile/${user.uid}/slipList`);
      }
    });
  }

  getSlipList(): firebase.firestore.CollectionReference {
    return this.slipListRef;
  }

  async createSlip(
    slip: SlipModel,
  ): Promise<firebase.firestore.DocumentReference> {
    return this.slipListRef.add(slip);
  }

  getSlipDetail(slipId: string): firebase.firestore.DocumentReference {
    return this.slipListRef.doc(slipId);
  }

  // addGuest(
  //   guestName: string,
  //   eventId: string,
  //   eventPrice: number,
  //   guestPicture: string = null
  // ): Promise<void> {
  //   return this.slipListRef
  //     .doc(eventId)
  //     .collection('guestList')
  //     .add({ guestName })
  //     .then(newGuest => {
  //       return firebase.firestore().runTransaction(transaction => {
  //         return transaction.get(this.eventListRef.doc(eventId)).then(eventDoc => {
  //           const newRevenue = eventDoc.data().revenue + eventPrice;
  //           transaction.update(this.eventListRef.doc(eventId), { revenue: newRevenue });
  //           if (guestPicture != null) {
  //             const storageRef = firebase
  //               .storage()
  //               .ref(`/guestProfile/${newGuest.id}/profilePicture.png`);

  //             return storageRef
  //               .putString(guestPicture, 'base64', { contentType: 'image/png' })
  //               .then(() => {
  //                 return storageRef.getDownloadURL().then(downloadURL => {
  //                   return this.eventListRef
  //                     .doc(eventId)
  //                     .collection('guestList')
  //                     .doc(newGuest.id)
  //                     .update({ profilePicture: downloadURL });
  //                 });
  //               });
  //           }
  //         });
  //       });
  //     });
  // }
}
