import { Component } from '@angular/core';

//a diferença neste é que tem as Urls:
@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Adriana";
  dataNascimento = "1979-07-07"
}
