import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
 
  producto;
  carrito;
  usuarios;


  constructor(public navCtrl: NavController, public alert: AlertController, public navParams: NavParams, public storage: Storage) {
  this.producto = this.navParams.get('producto');
  this.carrito=this.navParams.get('carrito');
  this.usuarios=this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
  
  }

  agregarClick(p){
    const alerta = this.alert.create({
      title: 'Excelente',
      subTitle: "El prducto se ha agregado al carrito.",
      buttons: ['Ok']
    });
    alerta.present();

    this.carrito.push(this.producto);
    this.storage.set('usuarios', JSON.stringify(this.usuarios));

    this.navCtrl.pop();
  }




}
