import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UUID } from 'angular2-uuid';


@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  orderNumber: string
  orderDate:Date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.orderNumber=UUID.UUID();
    this.orderDate=new Date();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

}
