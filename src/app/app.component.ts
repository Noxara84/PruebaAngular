import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prueba;
  title = 'Quantos';
  hola(){
    console.log(this.prueba)
  }
}
