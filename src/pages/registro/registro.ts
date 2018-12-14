import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";


@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  nombre='';
  telefono='';
  correo = '';
  contra = '';
  usuarios = [];
  car=[];

  constructor(public navCtrl: NavController, public alert: AlertController, public navParams: NavParams, public storage: Storage) {
    this.usuarios = this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  clickRegistro() {

    if(this.contra.length>7 && this.correo.length>0){
    this.usuarios.push({
      nombre:this.nombre,
      telefono:this.telefono,
      correo: this.correo,
      contra: this.contra,
      cart: this.car,
    });
    this.storage.set('usuarios', JSON.stringify(this.usuarios));
    this.navCtrl.pop();
  
  }

  else {
    const alerta = this.alert.create({
      title: "ERROR",
      subTitle: "La contraseña debe tener al menos 8 caracteres.",
      buttons: ['Ok']
    });
    alerta.present();
  }
  
  }

}