import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',


})
export class PrincipalPage {

  producto = ProductoPage;
  car=CarritoPage;

  usuario;

  prods = [

    { nombre: 'Porsche 911',
    imagen: "../assets/imgs/911.jpg",
    precio: "1,512,000",
    vend:'Checo Beltrán',
    fecha: '05/12/18',
    disp: '32',
    val:[1,2,3,4],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Tesla Model x',
    imagen: '../assets/imgs/tesla x.jpg',
    precio: "2,642,500",
    vend:'Andres Ramirez',
    fecha: '03/10/18',
    disp: '6',
    val: [1,2,3,4],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'La ferrari',
    imagen: '../assets/imgs/laferrari.jpg',
    precio: "2,380,500",
    vend:'Diego hinojosa',
    fecha: '6/10/18',
    disp: '12',
    val:[1,2,3],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Bugatti veyron',
    imagen: '../assets/imgs/bugattiveyron.jpg',
    precio: "1,830,500 €",
    vend:'Roberto Hernandez',
    fecha: '03/09/18',
    disp: '15',
    val:[1,2,3,4,5],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'F12 Berlinetta',
    imagen: '../assets/imgs/berlinetta.jpg',
    precio: "399,586 €",
    vend:'Julio Hernandez',
    fecha: '19/03/18',
    disp: '30',
    val:[1,2,3],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Nissan GTR',
    imagen: '../assets/imgs/gtr.jpg',
    precio: "185,000 €",
    vend:'Alex Ramirez',
    fecha: '29/04/18',
    disp: '32',
    val:[1,2,3,4],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'BMW X2',
    imagen: '../assets/imgs/bmw x2.jpg',
    precio: "$ 599,900",
    vend:'Arturo Tellez',
    fecha: '21/07/18',
    disp: '15',
    val:[1,2,3,4,5],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'KIA Sportage',
    imagen: '../assets/imgs/sportage.jpg',
    precio: "$ 414,900",
    vend:'Paola Salas',
    fecha: '05/04/18',
    disp: '60',
    val:[1,2,3],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Corvette ZR1',
    imagen: '../assets/imgs/corvette.jpg',
    precio: "$ 1,498,800",
    vend:'Sergio Cardenas',
    fecha: '05/03/18',
    disp: '20',
    val:[1,2,3,4,5],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Alfa Romeo 4C',
    imagen: '../assets/imgs/alfaromeo.jpg',
    precio: "79,590 €",
    vend:'Rene Sanchez',
    fecha: '01/06/18',
    disp: '5',
    val:[1,2,3,4],
    reseña: '',
    avatar:'',
    fer:"",
    usur:""},

    { nombre: 'Mercedes-Benz G-Class',
      imagen: "../assets/imgs/claseg.jpg",
      precio: "2,506,000",
      vend:'Arturo Enrique',
      fecha: '01/12/17',
      disp: '12',
      val:[1,2,3,4],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

      { nombre: 'Lamborghini Urus',
      imagen: "../assets/imgs/urus.jpg",
      precio: "4,122,000",
      vend:'Saúl Álvarez',
      fecha: '02/10/18',
      disp: '1',
      val:[1,2,3,4],
      reseña: '',
      avatar:'',
      fer:"",
       usur:""},
 
       { nombre: 'BMW i8',
      imagen: "../assets/imgs/i8.jpg",
      precio: "2,322,000",
      vend:'Fernanda Villa',
      fecha: '06/06/17',
      disp: '9',
      val:[1,2,3],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Jeep Wrangler',
      imagen: "../assets/imgs/wrangler.jpg",
      precio: "749,800",
      vend:'José Ramírez',
      fecha: '11/09/18',
      disp: '47',
      val:[1,2,3],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Honda Civic Type R',
      imagen: "../assets/imgs/typer.jpg",
      precio:"770,000",
      vend:'Isaac Dominguez',
      fecha: '02/09/17',
      disp: '5',
      val:[1,2,3,4,5],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Land Rover Defender',
      imagen: "../assets/imgs/defender.jpg",
      precio:"2,429,000",
      vend:'Mauricio Valdez',
      fecha: '22/08/17',
      disp: '6',
      val:[1,2,3,4],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},


{ nombre: 'Audi R8',
      imagen: "../assets/imgs/r8.jpg",
      precio:"1,329,000",
      vend:'Marco Figueroa',
      fecha: '19/01/16',
      disp: '2',
      val:[1,2],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'Infinity QX70',
      imagen: "../assets/imgs/qx70.jpg",
      precio:"798,700",
      vend:'Miguel Méndez',
      fecha: '14/03/18',
      disp: '5',
      val:[1,2,3,4],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

{ nombre: 'BMW x6',
      imagen: "../assets/imgs/x6.jpg",
      precio:"900,500",
      vend:'Joel Méndez',
      fecha: '18/06/18',
      disp: '5',
      val:[1,2,3,4],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},

      { nombre: 'Amg GT',
      imagen: "../assets/imgs/gt.jpg",
      precio:"2,500,000",
      vend:'Miguel Jauregui',
      fecha: '23/10/18',
      disp: '3',
      val:[1,2,3,4,5],
      reseña: '',
      avatar:'',
      fer:"",
      usur:""},



]

carrito=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.carrito=this.navParams.get('carr');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  productoClick(p){
        this.navCtrl.push(this.producto, {producto:p, carrito:this.carrito});

  }

  carritoClick(){
        this.navCtrl.push(this.car, {cart:this.carrito});
  }

}
