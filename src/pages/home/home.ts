import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { GalleryPage } from '../gallery/gallery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private imagePicker: ImagePicker) {

  }


  openGallery(): void {
    let options = {
      maximumImagesCount: 8,
      width: 500,
      height: 500,
      quality: 75
    }

    this.imagePicker.getPictures(options)
    .then(
      file_uris => this.navCtrl.push(GalleryPage, { images: file_uris }),
      err => console.log(err)
    );
  }

}
