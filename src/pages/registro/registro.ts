import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  correo = '';
  contra = '';
  usuarios = [];
  car=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro() {
    this.usuarios.push({
      correo: this.correo,
      contra: this.contra,
      cart:this.car,
    });
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  }

}