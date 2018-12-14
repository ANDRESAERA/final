import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';
import { CarritoPage } from '../carrito/carrito';


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
    resena: 'El carro me llego en dos semanas, muy impresionado',
    avatar:'',
    fer:"13/12/2018",
    usur:"Diego Hinojosa"},

    { nombre: 'Tesla Model x',
    imagen: '../assets/imgs/tesla x.jpg',
    precio: "2,642,500",
    vend:'Andres Ramirez',
    fecha: '03/10/18',
    disp: '6',
    val: [1,2,3,4],
    resena: 'muy bonita la camioneta, me gusto mucho',
    avatar:'',
    fer:"21/12/2016",
    usur:"Sergio Beltran"},

    { nombre: 'La ferrari',
    imagen: '../assets/imgs/laferrari.jpg',
    precio: "2,380,500",
    vend:'Diego hinojosa',
    fecha: '6/10/18',
    disp: '12',
    val:[1,2,3],
    resena: ' Muy bonito el color del la ferrari',
    avatar:'',
    fer:"20/10/2014",
    usur:"Andres Ramirez"},

    { nombre: 'Bugatti veyron',
    imagen: '../assets/imgs/bugattiveyron.jpg',
    precio: "1,830,500 €",
    vend:'Roberto Hernandez',
    fecha: '03/09/18',
    disp: '15',
    val:[1,2,3,4,5],
    resena: 'Muy rapido el carro y llego antes de lo esperado',
    avatar:'',
    fer:"02/02/2018",
    usur:"David Ramirez"},

    { nombre: 'F12 Berlinetta',
    imagen: '../assets/imgs/berlinetta.jpg',
    precio: "399,586 €",
    vend:'Julio Hernandez',
    fecha: '19/03/18',
    disp: '30',
    val:[1,2,3],
    resena: 'No me gusto el color y tenia un rayon',
    avatar:'',
    fer:"05/09/2018",
    usur:"Sergio Cardenas"},

    { nombre: 'Nissan GTR',
    imagen: '../assets/imgs/gtr.jpg',
    precio: "185,000 €",
    vend:'Alex Ramirez',
    fecha: '29/04/18',
    disp: '32',
    val:[1,2,3,4],
    resena: 'Muy bonito el carro',
    avatar:'',
    fer:"11/12/2018",
    usur:"Alex Rueda"},

    { nombre: 'BMW X2',
    imagen: '../assets/imgs/bmw x2.jpg',
    precio: "$ 599,900",
    vend:'Arturo Tellez',
    fecha: '21/07/18',
    disp: '15',
    val:[1,2,3,4,5],
    resena: 'Va muy rapido el carro',
    avatar:'',
    fer:"06/07/2018",
    usur:"Salvador Perez"},

    { nombre: 'KIA Sportage',
    imagen: '../assets/imgs/sportage.jpg',
    precio: "$ 414,900",
    vend:'Paola Salas',
    fecha: '05/04/18',
    disp: '60',
    val:[1,2,3],
    resena: 'Muy buena camioneta, buena para toda la familia',
    avatar:'',
    fer:"13/12/2018",
    usur:"Sergio Bañuelos"},

    { nombre: 'Corvette ZR1',
    imagen: '../assets/imgs/corvette.jpg',
    precio: "$ 1,498,800",
    vend:'Sergio Cardenas',
    fecha: '05/03/18',
    disp: '20',
    val:[1,2,3,4,5],
    resena: 'Muy bonito el color del corvette',
    avatar:'',
    fer:"10/12/2018",
    usur:"Dylan Reyes"},

    { nombre: 'Alfa Romeo 4C',
    imagen: '../assets/imgs/alfaromeo.jpg',
    precio: "79,590 €",
    vend:'Rene Sanchez',
    fecha: '01/06/18',
    disp: '5',
    val:[1,2,3,4],
    resena: 'Buena calidad y buen envio',
    avatar:'',
    fer:"09/12/2017",
    usur:"Rene Martinez"},

    { nombre: 'Mercedes-Benz G-Class',
      imagen: "../assets/imgs/claseg.jpg",
      precio: "2,506,000",
      vend:'Arturo Enrique',
      fecha: '01/12/17',
      disp: '12',
      val:[1,2,3,4],
      resena: 'Me encanto el carro',
      avatar:'',
      fer:"13/10/2017",
      usur:"Andrea Torres"},

      { nombre: 'Lamborghini Urus',
      imagen: "../assets/imgs/urus.jpg",
      precio: "4,122,000",
      vend:'Saúl Álvarez',
      fecha: '02/10/18',
      disp: '1',
      val:[1,2,3,4],
      resena: 'Me encanto y voy a pedir mas',
      avatar:'',
      fer:"04/12/2018",
       usur:"Javier Salas"},
 
       { nombre: 'BMW i8',
      imagen: "../assets/imgs/i8.jpg",
      precio: "2,322,000",
      vend:'Fernanda Villa',
      fecha: '06/06/17',
      disp: '9',
      val:[1,2,3],
      resena: ' Buena camioneta',
      avatar:'',
      fer:"01/12/2016",
      usur:"Paola Garcia"},

{ nombre: 'Jeep Wrangler',
      imagen: "../assets/imgs/wrangler.jpg",
      precio: "749,800",
      vend:'José Ramírez',
      fecha: '11/09/18',
      disp: '47',
      val:[1,2,3],
      resena: 'No me gustó mucho el color',
      avatar:'',
      fer:"10/10/2018",
      usur:"Andres Ramirez"},

{ nombre: 'Honda Civic Type R',
      imagen: "../assets/imgs/typer.jpg",
      precio:"770,000",
      vend:'Isaac Dominguez',
      fecha: '02/09/17',
      disp: '5',
      val:[1,2,3,4,5],
      resena: 'Buen color',
      avatar:'',
      fer:"13/12/2018",
      usur:"Isaac Tapia"},

{ nombre: 'Land Rover Defender',
      imagen: "../assets/imgs/defender.jpg",
      precio:"2,429,000",
      vend:'Mauricio Valdez',
      fecha: '22/08/17',
      disp: '6',
      val:[1,2,3,4],
      resena: 'No me gusto para nada',
      avatar:'',
      fer:"11/10/2018",
      usur:"Andres Ramirez"},


{ nombre: 'Audi R8',
      imagen: "../assets/imgs/r8.jpg",
      precio:"1,329,000",
      vend:'Marco Figueroa',
      fecha: '19/01/16',
      disp: '2',
      val:[1,2],
      resena: 'Es uno de los mejores carros que he corrido en mi vida. El motor suena increíble.',
      avatar:'',
      fer:"25/12/16",
      usur:"Fernanda Márquez"},

{ nombre: 'Infinity QX70',
      imagen: "../assets/imgs/qx70.jpg",
      precio:"798,700",
      vend:'Miguel Méndez',
      fecha: '14/03/18',
      disp: '5',
      val:[1,2,3,4],
      resena: 'Esperaba un poco más de Infinity este año, esperaré al siguiente. Casi no cambió nada respecto a los años pasados.',
      avatar:'',
      fer:"15/06/18",
      usur:"Javier Hernández"},

{ nombre: 'BMW X6',
      imagen: "../assets/imgs/x6.jpg",
      precio:"900,500",
      vend:'Joel Méndez',
      fecha: '18/06/18',
      disp: '5',
      val:[1,2,3,4],
      resena: 'Mi camioneta favorita de todos los tiempos. Se ve muy bien en ese color.',
      avatar:'',
      fer:"29/08/18",
      usur:"Fernanda González"},

      { nombre: 'Amg GT',
      imagen: "../assets/imgs/gt.jpg",
      precio:"2,500,000",
      vend:'Miguel Jauregui',
      fecha: '23/10/18',
      disp: '3',
      val:[1,2,3,4,5],
      resena: 'Hace poco lo vi en una expo y quedé impresionado. Es uno de los más rápidos que ha hecho Mercedes. Parece de F1.',
      avatar:'',
      fer:"26/11/18",
      usur:"Darío Gómez"},



]

carrito=[];

usuarios=[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.carrito=this.navParams.get('carr');
        this.usuarios=this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  productoClick(p){
        this.navCtrl.push(this.producto, {producto:p, carrito:this.carrito, usuarios:this.usuarios});

  }

  carritoClick(){
        this.navCtrl.push(this.car, {carrito:this.carrito});
  }

}
