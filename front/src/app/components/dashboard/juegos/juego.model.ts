export class Juego{
  id_usuario:any;
  nombre_juego:any;
  puntuacion:any;
  tiempo:any;

  constructor(id_usuario:Number, nombre_juego:String, puntuacion:Number, tiempo:String ){
    this.id_usuario = id_usuario;
    this.nombre_juego = nombre_juego;
    this.puntuacion = puntuacion;
    this.tiempo = tiempo;
  }
}
