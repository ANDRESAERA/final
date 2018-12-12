import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RegistroPage} from "../registro/registro";
import {Storage} from "@ionic/storage";
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  correo = '';
  contra = '';
  principal = PrincipalPage;
  registro = RegistroPage;

  usuarios = [];




  constructor(public navCtrl: NavController, public alert: AlertController, public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'usuarios')) {
          this.storage.get('usuarios')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }
      });
  }

  clickSesion() {
    console.log(this.correo);
    console.log(this.contra);

    let index = this.usuarios.findIndex(u => u.correo == this.correo && u.contra == this.contra);

    if (index >= 0) {
      this.navCtrl.push(this.principal, {carr: this.usuarios[index].cart, usuarios:this.usuarios})
    }
    else {
      const alerta = this.alert.create({
        title: "ERROR",
        subTitle: "Inicio de Sesión No Válido",
        buttons: ['Ok']
      });
      alerta.present();
    }

  }

  clickRegistro() {
    this.navCtrl.push(this.registro, {usuarios: this.usuarios});
  }

}