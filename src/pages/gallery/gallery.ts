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
  }

  getFrameClass(index: number) {

    let className: string = this.photoFrames[index];

    if (!className) {
      return "noborderimg";
    } else if (className.indexOf("Yellow") != -1) {
      return "yellowborderimg";
    } else if (className.indexOf("Black") != -1) {
      return "blackborderimg";
    } else {
      return "whiteborderimg";
    }
  }

  send() {
    let checkmessage = "photo ";
    let notselected = false;
    let totalPrice: number = 0;
    for (let i = 0; i < this.photoFrames.length; i++) {
      if (!this.photoFrames[i]) {
        notselected = true;
        checkmessage = checkmessage + (i + 1) + " , "
      } else {
        totalPrice = parseInt(this.photoFrames[i].substr(this.photoFrames[i].length - 2)) + totalPrice;
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
          }
        ]
      });
      alert.present();
    } else {


      let confirmmessage = " Total Price for " + this.images.length + " photo frames " + totalPrice
        + " euro";
      let confirmalert = this.alertCtrl.create({
        title: ' Confirm to Send  ',
        message: confirmmessage,
        subTitle: 'choose payment',
        inputs: [
          {
            type: 'radio',
            label: 'paypal',
            value: 'standard',
            checked: true
          },
          {
            type: 'radio',
            label: 'paydirect',
            value: 'paydirect'
          },
          {
            type: 'radio',
            label: 'sofortüberweisung',
            value: 'sofortüberweisung'
          },
          {
            type: 'radio',
            label: 'Bank transfer',
            value: 'Bank transfer'
          }
        ],

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
              this.images = null;
              this.photoFrames = null;
              this.navCtrl.push('CheckoutPage');
            }
          }
        ]
      });
      confirmalert.present();
    }
  }
  ionViewDidLoad() {
    this.images = this.navParams.get('images');
    if (this.images) {
      this.photoFrames = Array(this.images.length);
    }
  }
}
