import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  /*
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad GalleryPage');
    }*/

  images: Array<string>;
  grid: Array<Array<string>>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.images = this.navParams.get('images');
    this.grid = Array(Math.ceil(this.images.length / 2));

    let rowNum = 0;

    for (let i = 0; i < this.images.length; i += 2) {

      this.grid[rowNum] = Array(2);

      if (this.images[i]) {
        this.grid[rowNum][0] = this.images[i]
      }

      if (i + 1 <= this.images.length) {
        this.grid[rowNum][1] = this.images[i + 1]
      }

      rowNum++;
    }

  }

}
