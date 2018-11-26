import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reto Bola 8';
  resultado = ['No cuentes con ello.', 'Debes confiar en ello.', 'Muy dudoso.', 'Sin duda.', 'Sí - definitivamente.', 'No-Rotundamente NOP', 'Ni en tus sueños', 'si los astros se alinean.....', 'Eso es una pregunta?', 'puedes repetir la pregunta?'];
  num: number;
  starts: boolean = false;
  texto: string;
  historial: Array<String>[];

  intro(event): void {
    if (event.keyCode === 13) {
      this.boton();
    }
  };

  boton(): void {
    this.inicio();
    this.num = Math.floor(Math.random() * 11);
    this.texto = "";
  };

  inicio(): void {
    this.starts = true;
  }

  sumHistorial(): void {
//this.historial=this.historial+this.resultado;
  }

}
