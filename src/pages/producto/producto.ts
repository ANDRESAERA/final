import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
 
  producto;
  carrito;


  constructor(public navCtrl: NavController, public alert: AlertController, public navParams: NavParams) {
  this.producto = this.navParams.get('producto');
  this.carrito=this.navParams.get('carr');
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

    this.carrito.push(
      this.producto
    );


    this.navCtrl.pop();
  }

}
