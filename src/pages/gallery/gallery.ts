import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  images: Array<string>;
  photoFrames: Array<string>;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  chooseFrame(index: number, selectValue: string) {
    this.photoFrames[index] = selectValue;
    /*
    let alert = this.alertCtrl.create({
      title: 'index ' + index + "select " + selectValue,
      subTitle: 'Subtitle',
      buttons: ['Dismiss']
    });
    alert.present();
    */
  }

  send() {
    let checkmessage = "photo ";
    let notselected = false;
    for (let i = 0; i < this.photoFrames.length; i++) {
      if (!this.photoFrames[i]) {
        notselected = true;
        checkmessage = checkmessage + (i+1) + " , "
      }
    }

    if (notselected) {
      checkmessage = checkmessage + " frame are not  selected !"

      let alert = this.alertCtrl.create({
        title: ' select frames ',
        message: checkmessage,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Buy',
            handler: () => {
              console.log('Buy clicked');
            }
          }
        ]
      });
      alert.present();
    }



  }

  ionViewDidLoad() {
    this.images = this.navParams.get('images');
    this.photoFrames = Array(this.images.length);

  }

}
